 SELECT AVG(sq_ft) FROM office;
	 SELECT COUNT (*) FROM apartment;
	 SELECT apartment_number FROM apartment WHERE (tenant = '') IS NOT FALSE;
 SELECT company_name FROM office;
	 SELECT *, cubicles+number_bathrooms as total FROM office;
 SELECT * from storefront WHERE kitchen_available = TRUE;
	 SELECT * FROM storefront WHERE outdoor_seating = TRUE ORDER BY sq_ft DESC;
 SELECT * FROM office ORDER BY cubicles ASC;
 SELECT * FROM office ORDER BY cubicles, number_bathrooms ASC;
