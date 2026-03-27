try {
    JSON.parse("not a number");
} 
catch (error) {
    console.log("Invalid JSON! " + error.message);
} 
finally {
    console.log("Parsing attempt done.");
}
