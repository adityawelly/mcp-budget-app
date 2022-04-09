package main

import (
	"flag"
	"fmt"
)

const version = "1.0.0"

type config struct {
	port int
	env  string
}

func main() {
	var conn config

	flag.IntVar(&conn.port, "port", 4000, "Server port to listen on")
	flag.StringVar(&conn.env, "env", "development", "Application environment (developement|production)")
	flag.Parse()

	fmt.Println("Jalan")

}
