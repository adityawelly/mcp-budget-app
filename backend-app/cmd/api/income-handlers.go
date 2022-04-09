package main

import (
	"backend/cmd/api/models"
	"errors"
	"net/http"
	"strconv"
	"time"

	"github.com/julienschmidt/httprouter"
)

func (app *application) getOneIncome(w http.ResponseWriter, r *http.Request) {
	params := httprouter.ParamsFromContext(r.Context())

	id, err := strconv.Atoi(params.ByName("id"))
	if err != nil {
		app.logger.Print(errors.New("Invalid id parameter"))
		app.errorJSON(w, err)
	}

	app.logger.Println("id is", id)

	income := models.Income{
		ID:          id,
		TanggalIn:   time.Date(2022, 04, 9, 9, 0, 0, 0, time.Local),
		JumlahIn:    20000,
		CatatanIn:   "Jajan",
		CreatedDate: time.Now(),
		UpdatedDate: time.Now(),
	}

	err = app.writeJSON(w, http.StatusOK, income, "income")
}

func (app *application) getAllIncome(w http.ResponseWriter, r *http.Request) {

}
