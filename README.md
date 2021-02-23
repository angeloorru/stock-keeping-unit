<h2>Run Webpack:</h2>
<p>npm run webpack</p>
<h2>Run NodeJS server:</h2>
<p>npm start</p>
<h2>Run tests:</h2>
<p>npm test</p>

<h2>How to run the program:</h2>
<p>What do you need:</p>
<ul>
    <li>A tool such as Postman or alternatively, a browser needed to execute http requests</li>
    <li>On a terminal window/tab, navigate to your project directory up to the location of the package.json file. Once there, run the command "npm i". This should install all the dependencies needed as well as the node_modules folders and the package-lock.json file.</li>
</ul>

<p>Before starting to execute the requests, ensure that your nodeJS server is up and running (i.e. npm start)</p>
<p>The available endpoints to query are as follows:</p>
<ul>
    <li>Fetch all transactions: http://localhost:7001/sku/fetch-transactions</li>
    <li>Fetch all transactions by ID (sku): http://localhost:7001/sku/fetch-transactions/{SKU}</li>
    <li>Fetch all stock: http://localhost:7001/sku/fetch-stock</li>
    <li>Fetch all stock by ID (sku): http://localhost:7001/sku/fetch-stock/{SKU}</li>
    <li>Fetch current stock: http://localhost:7001/sku/fetch-current-stock/{SKU}</li>
    <li>Trigger error in transaction: http://localhost:7001/sku/fetch-transactions/test/test/test</li>
    <li>Trigger error in stock: http://localhost:7001/sku/fetch-stock/test/test/test</li>
</ul>
 
