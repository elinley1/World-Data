CREATE TABLE happiness (
    country VARCHAR (100) NOT NULL,
    code VARCHAR (3) NOT NULL,
    year INT NOT NULL,
    happiness_idx DECIMAL (5, 4) NOt NULL
);

CREATE TABLE gdp (
    country VARCHAR (100) NOT NULL,
    code VARCHAR (3) NOT NULL,
    year INT NOT NULL,
    real_gdp DECIMAL (5,4) NOT NULL
);

CREATE TABLE gini (
    country VARCHAR (100) NOT NULL,
    code VARCHAR (3) NOT NULL,
    year INT NOT NULL,
    gini_idx DECIMAL (5,4) NOT NULL
);

CREATE TABLE life (
    country VARCHAR (100) NOT NULL,
    code VARCHAR (3) NOT NULL,
    year INT NOT NULL,
    life_span DECIMAL (5,4) NOT NULL
);

CREATE TABLE internet (
    country VARCHAR (100) NOT NULL,
    code VARCHAR (3) NOT NULL,
    year INT NOT NULL,
    internet_use DECIMAL (5,4) NOT NULL
);