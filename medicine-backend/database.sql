-- Create a new Database
CREATE DATABASE medicine_database;

-- Use the created Database
USE medicine_database;

-- Create a table for medicinessearchapp
CREATE TABLE medicines (
  id INT PRIMARY KEY AUTO_INCREMENT,
  Medicine_Link VARCHAR(255),
  Manufacturer VARCHAR(255),
  Real_Price FLOAT,
  Salts VARCHAR(255),
  Discounted_Price FLOAT,
  Quantity_text VARCHAR(255),
  Prescription_Required INT,
  Medicine_Name VARCHAR(255),
  Packaging VARCHAR(255),
  Quantity INT,
  Form VARCHAR(255),
  Salt_Len INT,
  Sources VARCHAR(255),
  Availability BOOLEAN,
  Salt1 VARCHAR(255),
  Dosage1 VARCHAR(255),
  Salt2 VARCHAR(255),
  Dosage2 VARCHAR(255),
  Salt3 VARCHAR(255),
  Dosage3 VARCHAR(255),
  Salt4 VARCHAR(255),
  Dosage4 VARCHAR(255),
  Cluster_Name VARCHAR(255),
  Dosage VARCHAR(255)
);

-- Add Data here
INSERT INTO medicines (id , Medicine_Link, Manufacturer, Real_Price, Salts, Discounted_Price, Quantity_text, Prescription_Required, Medicine_Name, Packaging, Quantity, Form, Salt_Len, Sources, Availability, Salt1, Dosage1, Salt2, Dosage2, Salt3, Dosage3, Salt4, Dosage4, Cluster_Name, Dosage)
VALUES
(1 , 'link1', 'Manufacturer X', 20, 'Salt1, Salt2', 15, '20 tablets', 1, 'Medicine A', 'Box', 100, 'Tablet', 2, 'Pharmacy A', 1, 'Salt1', '10mg', 'Salt2', '5mg', NULL, NULL, NULL, NULL, 'Cluster A', '10mg'),
(2 , 'link2', 'Manufacturer Y', 30, 'Salt3', 25, '30 capsules', 0, 'Medicine B', 'Bottle', 50, 'Capsule', 1, 'Pharmacy B', 0, 'Salt3', '20mg', NULL, NULL, NULL, NULL, NULL, NULL, 'Cluster B', '20mg');


