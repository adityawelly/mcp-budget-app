package main

import (
	"flag"
	"fmt"
	"log"
	"net/http"
	"os"
	"time"
)

const version = "1.0.0"

type config struct {
	port int
	env  string
}

type AppStatus struct {
	Status      string `json:"status"`
	Environment string `json:"environment"`
	Version     string `json:"version"`
}

type application struct {
	config config
	logger *log.Logger
}

func main() {
	var conn config

	flag.IntVar(&conn.port, "port", 4000, "Server port to listen on")
	flag.StringVar(&conn.env, "env", "development", "Application environment (developement|production)")
	flag.Parse()

	logger := log.New(os.Stdout, "", log.Ldate|log.Ltime)

	app := &application{
		config: conn,
		logger: logger,
	}

	// fmt.Println("Jalan")

	// http.HandleFunc("/status", func(w http.ResponseWriter, r *http.Request) {
	// 	fmt.Fprint(w, "masuk")
	// 	currentStatus := AppStatus{
	// 		Status:      "Available",
	// 		Environment: conn.env,
	// 		Version:     version,
	// 	}

	// 	js, err := json.MarshalIndent(currentStatus, "", "\t")
	// 	if err != nil {
	// 		log.Println(err)
	// 	}

	// 	w.Header().Set("Content-Type", "application/json")
	// 	w.WriteHeader(http.StatusOK)
	// 	w.Write(js)
	// })

	// err := http.ListenAndServe(fmt.Sprintf(":%d", conn.port), nil)

	srv := &http.Server{
		Addr:         fmt.Sprintf(":%d", conn.port),
		Handler:      app.routes(),
		IdleTimeout:  time.Minute,
		ReadTimeout:  10 * time.Second,
		WriteTimeout: 30 * time.Second,
	}

	logger.Println("Starting server on port", conn.port)

	err := srv.ListenAndServe()

	if err != nil {
		log.Println(err)
	}
}
