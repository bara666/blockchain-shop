/*
 * Database API
 *
 * Database-API can attend different kind of request to manage sqlserver request
 *
 * API version: 1.0.0
 * Contact: eduardo.alonso@disashop.com
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */

package api

import(
	"blockchain.com/blockchain"
	"blockchain.com/wallet"
	"blockchain.com/network"
	"net/http"
	"github.com/labstack/echo/v4"
	log "github.com/sirupsen/logrus"
)

func readAllCookies(c echo.Context) error {
	for _, cookie := range c.Cookies() {
		log.Debug(cookie.Name)
		log.Debug(cookie.Value)
	}
	return c.String(http.StatusOK, "Read all the cookies.\n")
}

func readAuthorizationHeader(c echo.Context) error {
	accessToken := c.Request().Header.Get("Authorization")
	if accessToken == "" {
		log.Error("Access token not detected.")
		return c.JSON(http.StatusUnauthorized, "Access token not detected.")
	}
	log.Debug(accessToken)
	return c.String(http.StatusOK, "Read authorization header.\n")
}

// healthcheck
//
//@Summary        Check health about the service to monitor status
//@Description    check health about the service to monitor status
//Tags            health
//@Success 200
//@Router /health [get]
func healthCheck(c echo.Context) error {
	return c.String(http.StatusOK, "Service is healthy!")
}

// getBalance
//
//@Summary        Obtain balance of a wallet
//@Description    Obtain balance from a given address that belong to address
//Tags            blockchain
//@Accept         json
//@Produce        json
//@Param          getbalance  body  api.Balance true "balance"
//@Success        200  "ok"
//@Failure        400  "Bad request"
//@Router         /getbalance [post]
func getBalance(c echo.Context) error {
	nodeID := "4000"
	balance := new(Balance)
	if err := c.Bind(balance); err != nil {
		return c.JSON(http.StatusBadRequest, err)
	}

	if !wallet.ValidateAddress(balance.Address) {
		log.Error("Address is not Valid")
		return c.JSON(http.StatusBadRequest, "Address is not Valid")
	}
	chain := blockchain.ContinueBlockChain(nodeID)
	UTXOSet := blockchain.UTXOSet{chain}
	defer chain.Database.Close()

	b := 0
	pubKeyHash := wallet.Base58Decode([]byte(balance.Address))
	pubKeyHash = pubKeyHash[1 : len(pubKeyHash)-4]
	UTXOs := UTXOSet.FindUnspentTransactions(pubKeyHash)

	for _, out := range UTXOs {
		b += out.Value
	}

	log.Infof("Balance of %s: %d\n", balance.Address, b)
	return c.JSON(http.StatusOK, b)
}

// sendTransaction
//
//@Summary        Send amount to other user
//@Description    send amount to user from wallet to wallet
//Tags            blockchain
//@Accept         json
//@Produce        json
//@Param          sendtransaction   body    api.SendTransaction  true "transaction"
//@Success        200  "ok"
//@Failure        400  "Bad request"
//@Router         /sendtransaction [post]
func send(c echo.Context) error {
	nodeID := "4000"
	sendTransaction := new(SendTransaction)
	if err := c.Bind(sendTransaction); err != nil {
		return c.JSON(http.StatusBadRequest, err)
	}
	if !wallet.ValidateAddress(sendTransaction.To) {
		log.Error("To address is not Valid")
		return c.JSON(http.StatusBadRequest, "To address is not Valid")
	}
	if !wallet.ValidateAddress(sendTransaction.From) {
		log.Error("From address is not Valid")
		return c.JSON(http.StatusBadRequest, "From address is not Valid")
	}
	chain := blockchain.ContinueBlockChain(nodeID)
	UTXOSet := blockchain.UTXOSet{chain}
	defer chain.Database.Close()

	wallets, err := wallet.CreateWallets(nodeID)
	if err != nil {
		log.Error("Error creating wallet: ", err)
		return c.JSON(http.StatusBadRequest, "Error creating wallet.")
	}

	wallet := wallets.GetWallet(sendTransaction.From)
	if wallet != nil {
		tx := blockchain.NewTransaction(wallet, sendTransaction.To, sendTransaction.Amount, &UTXOSet)
		if sendTransaction.MineNow {
			cbTx := blockchain.CoinbaseTx(sendTransaction.From, "")
			txs := []*blockchain.Transaction{cbTx, tx}
			block := chain.MineBlock(txs)
			UTXOSet.Update(block)
		} else {
			network.SendTx(network.KnownNodes[0], tx)
			log.Info("send tx")
		}
		//network.StartServer(nodeID, "")
		log.Info("Success!")
		return c.JSON(http.StatusOK, "Success!")
	}
	log.Error("Error! Unable to obtain wallet from address: ", sendTransaction.From)
	return c.JSON(http.StatusBadRequest, "Error! Unable to obtain wallet from address.")
}