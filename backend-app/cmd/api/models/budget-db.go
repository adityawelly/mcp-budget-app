package models

import "database/sql"

type DBModel struct {
	DB *sql.DB
}

func (m *DBModel) Get(id int) (*Income, error) {
	return nil, nil
}

func (m *DBModel) All(id int) ([]*Income, error) {
	return nil, nil
}
