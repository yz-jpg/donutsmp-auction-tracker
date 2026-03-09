CREATE DATABASE DonutSMP;
GO

USE DonutSMP;
GO

CREATE TABLE sales (
    id INT IDENTITY(1,1) PRIMARY KEY,
    item_id VARCHAR(100) NOT NULL,
    item_count INT NOT NULL,
    price_total INT NOT NULL,
    price_each FLOAT NOT NULL,
    sold_timestamp BIGINT NOT NULL,
    sold_at DATETIME NOT NULL
);

ALTER TABLE sales
ADD CONSTRAINT unique_sale UNIQUE (sold_timestamp);

CREATE INDEX idx_item_id ON sales(item_id);
CREATE INDEX idx_sold_at ON sales(sold_at);