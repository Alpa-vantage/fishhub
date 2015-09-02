package config

import (
	"fmt"
	"github.com/joho/godotenv"
	"os"
)

type Config struct {
	Port     string
	MongoURL string
}

func Load() (*Config, error) {
	godotenv.Load(".env")

	mongoURL := os.Getenv("MONGO_URL")
	if mongoURL == "" {
		return nil, fmt.Errorf("Missing MONGO_URL")
	}

	port := os.Getenv("PORT")
	if port == "" {
		port = "3000"
	}

	return &Config{
		port,
		mongoURL,
	}, nil
}
