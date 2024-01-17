export default (req, res) => {
  const { page = 1, pageSize = 10, query, sortBy, filterBy, minPrice, maxPrice, manufacturer } = req.query;

  const medicines = [
    { id: 1, Medicine_Link: 'link1', Manufacturer: 'Manufacturer X', Real_Price: 20, Salts: ['Salt1', 'Salt2'], Discounted_Price: 15, Quantity_text: '20 tablets', Prescription_Required: true, Medicine_Name: 'Medicine A', Packaging: 'Box', Quantity: 100, Form: 'Tablet', Salt_Len: 2, Source: 'Pharmacy A', Availability: true, Salt1: 'Salt1', Dosage1: '10mg', Salt2: 'Salt2', Dosage2: '5mg', Cluster_Name: 'Cluster A', Dosage: '10mg' },
    { id: 2, Medicine_Link: 'link2', Manufacturer: 'Manufacturer Y', Real_Price: 30, Salts: ['Salt3'], Discounted_Price: 25, Quantity_text: '30 capsules', Prescription_Required: false, Medicine_Name: 'Medicine B', Packaging: 'Bottle', Quantity: 50, Form: 'Capsule', Salt_Len: 1, Source: 'Pharmacy B', Availability: false, Salt1: 'Salt3', Dosage1: '20mg', Cluster_Name: 'Cluster B', Dosage: '20mg' },
    { id: 3, Medicine_Link: 'link2', Manufacturer: 'Manufacturer Y', Real_Price: 40, Salts: ['Salt3'], Discounted_Price: 40, Quantity_text: '30 capsules', Prescription_Required: false, Medicine_Name: 'Medicine C', Packaging: 'Bottle', Quantity: 50, Form: 'Capsule', Salt_Len: 1, Source: 'Pharmacy B', Availability: false, Salt1: 'Salt3', Dosage1: '20mg', Cluster_Name: 'Cluster B', Dosage: '20mg' },
    { id: 4, Medicine_Link: 'link2', Manufacturer: 'Manufacturer Y', Real_Price: 70, Salts: ['Salt3'], Discounted_Price: 70, Quantity_text: '30 capsules', Prescription_Required: false, Medicine_Name: 'Medicine D', Packaging: 'Bottle', Quantity: 50, Form: 'Capsule', Salt_Len: 1, Source: 'Pharmacy B', Availability: false, Salt1: 'Salt3', Dosage1: '20mg', Cluster_Name: 'Cluster B', Dosage: '20mg' },
    { id: 5, Medicine_Link: 'link2', Manufacturer: 'Manufacturer Y', Real_Price: 10, Salts: ['Salt3'], Discounted_Price: 10, Quantity_text: '30 capsules', Prescription_Required: false, Medicine_Name: 'Medicine E', Packaging: 'Bottle', Quantity: 50, Form: 'Capsule', Salt_Len: 1, Source: 'Pharmacy B', Availability: false, Salt1: 'Salt3', Dosage1: '20mg', Cluster_Name: 'Cluster B', Dosage: '20mg' },
    { id: 6, Medicine_Link: 'link2', Manufacturer: 'Manufacturer Y', Real_Price: 15, Salts: ['Salt3'], Discounted_Price: 25, Quantity_text: '30 capsules', Prescription_Required: false, Medicine_Name: 'Medicine F', Packaging: 'Bottle', Quantity: 50, Form: 'Capsule', Salt_Len: 1, Source: 'Pharmacy B', Availability: false, Salt1: 'Salt3', Dosage1: '20mg', Cluster_Name: 'Cluster B', Dosage: '20mg' },
    { id: 7, Medicine_Link: 'link2', Manufacturer: 'Manufacturer Y', Real_Price: 12, Salts: ['Salt3'], Discounted_Price: 25, Quantity_text: '30 capsules', Prescription_Required: false, Medicine_Name: 'Medicine G', Packaging: 'Bottle', Quantity: 50, Form: 'Capsule', Salt_Len: 1, Source: 'Pharmacy B', Availability: false, Salt1: 'Salt3', Dosage1: '20mg', Cluster_Name: 'Cluster B', Dosage: '20mg' },
    { id: 8, Medicine_Link: 'link2', Manufacturer: 'Manufacturer Y', Real_Price: 35, Salts: ['Salt3'], Discounted_Price: 25, Quantity_text: '30 capsules', Prescription_Required: false, Medicine_Name: 'Medicine H', Packaging: 'Bottle', Quantity: 50, Form: 'Capsule', Salt_Len: 1, Source: 'Pharmacy B', Availability: false, Salt1: 'Salt3', Dosage1: '20mg', Cluster_Name: 'Cluster B', Dosage: '20mg' },
    { id: 9, Medicine_Link: 'link2', Manufacturer: 'Manufacturer Y', Real_Price: 85, Salts: ['Salt3'], Discounted_Price: 25, Quantity_text: '30 capsules', Prescription_Required: false, Medicine_Name: 'Medicine I', Packaging: 'Bottle', Quantity: 50, Form: 'Capsule', Salt_Len: 1, Source: 'Pharmacy B', Availability: false, Salt1: 'Salt3', Dosage1: '20mg', Cluster_Name: 'Cluster B', Dosage: '20mg' },
    { id: 10, Medicine_Link: 'link2', Manufacturer: 'Manufacturer Y', Real_Price: 90, Salts: ['Salt3'], Discounted_Price: 25, Quantity_text: '30 capsules', Prescription_Required: false, Medicine_Name: 'Medicine J', Packaging: 'Bottle', Quantity: 50, Form: 'Capsule', Salt_Len: 1, Source: 'Pharmacy B', Availability: false, Salt1: 'Salt3', Dosage1: '20mg', Cluster_Name: 'Cluster B', Dosage: '20mg' },
    { id: 11, Medicine_Link: 'link2', Manufacturer: 'Manufacturer Y', Real_Price: 30, Salts: ['Salt3'], Discounted_Price: 25, Quantity_text: '30 capsules', Prescription_Required: false, Medicine_Name: 'Medicine K', Packaging: 'Bottle', Quantity: 50, Form: 'Capsule', Salt_Len: 1, Source: 'Pharmacy B', Availability: false, Salt1: 'Salt3', Dosage1: '20mg', Cluster_Name: 'Cluster B', Dosage: '20mg' },
    
  ];

  let filteredResults = medicines;

  if (filterBy) {
    filteredResults = filteredResults.filter(medicine => medicine.Manufacturer === filterBy);
  }

  if (minPrice) {
    filteredResults = filteredResults.filter(medicine => medicine.Real_Price >= parseInt(minPrice, 10));
  }

  if (maxPrice) {
    filteredResults = filteredResults.filter(medicine => medicine.Real_Price <= parseInt(maxPrice, 10));
  }

  if (manufacturer) {
    filteredResults = filteredResults.filter(medicine => medicine.Manufacturer === manufacturer);
  }

  if (query) {
    const lowercaseQuery = query.toLowerCase();
    filteredResults = filteredResults.filter(medicine => medicine.Medicine_Name.toLowerCase().includes(lowercaseQuery));
  }

  // Sort results based on the sorting criteria
  let sortedResults = [...filteredResults];

  if (sortBy === 'relevance') {
    // Implement your relevance sorting logic here
  } else if (sortBy === 'price-asc') {
    sortedResults.sort((a, b) => a.Real_Price - b.Real_Price);
  } else if (sortBy === 'price-desc') {
    sortedResults.sort((a, b) => b.Real_Price - a.Real_Price);
  } else if (sortBy === 'name-asc') {
    sortedResults.sort((a, b) => a.Medicine_Name.localeCompare(b.Medicine_Name));
  } else if (sortBy === 'name-desc') {
    sortedResults.sort((a, b) => b.Medicine_Name.localeCompare(a.Medicine_Name));
  }

  // Paginate the results
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + parseInt(pageSize, 10);
  const paginatedResults = sortedResults.slice(startIndex, endIndex);

  res.status(200).json({
    results: paginatedResults,
    totalPages: Math.ceil(sortedResults.length / pageSize),
  });
};
