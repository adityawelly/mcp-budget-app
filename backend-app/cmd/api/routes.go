package main

import (
	"net/http"

	"github.com/julienschmidt/httprouter"
)

func (app *application) routes() *httprouter.Router {
	router := httprouter.New()

	router.HandlerFunc(http.MethodGet, "/status", app.statusHandler)

	router.HandlerFunc(http.MethodGet, "/v1/income/:id", app.getOneIncome)
	router.HandlerFunc(http.MethodGet, "/v1/income", app.getAllIncome)

	// router.HandlerFunc(http.MethodPost, "/v1/income/editincome", app.editincome)
	return router
}
