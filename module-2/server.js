const http = require("http");

const posts = [
	{
		title: "Introduction to Machine Learning",
		author: "Jane Smith",
		date: "2024-04-28",
		content:
			"Machine learning is a subset of artificial intelligence that focuses on the development of computer programs that can learn and improve from experience. In machine learning, algorithms are trained on data to create models that can make predictions or decisions without being explicitly programmed to perform the task.",
	},
	{
		title: "The Future of Renewable Energy",
		author: "Bob Johnson",
		date: "2024-04-30",
		content:
			"Renewable energy sources such as solar, wind, and hydroelectric power have gained significant attention in recent years due to their potential to reduce greenhouse gas emissions and mitigate climate change. With advancements in technology and decreasing costs, renewable energy is expected to play a crucial role in the transition to a more sustainable energy future.",
	},
	{
		title: "Tips for Effective Time Management",
		author: "Alice Williams",
		date: "2024-05-01",
		content:
			"Effective time management is essential for maximizing productivity and reducing stress. Some tips for improving time management include setting clear goals, prioritizing tasks, minimizing distractions, and utilizing tools such as calendars and to-do lists. By implementing these strategies, individuals can better manage their time and accomplish more in their personal and professional lives.",
	},
];

const server = http.createServer((req, res) => {
	console.log(req.url);

	if (req.url === "/home" && req.method === "GET") {
		res.writeHead(200, {
			"Content-Type": "text/html",
		});
		res.end(`<!DOCTYPE html>
		<html lang="en">
			<head>
				<meta charset="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>Shopping Card Design</title>
				<link rel="stylesheet" href="styles.css" />
			</head>
			<style>
				body {
					font-family: Arial, sans-serif;
					margin: 0;
					padding: 0;
					background-color: #f4f4f4;
					display: flex;
					justify-content: center;
					align-items: center;
					height: 100vh;
				}
		
				.card {
					width: 300px;
					border-radius: 10px;
					background-color: #fff;
					box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
					overflow: hidden;
					transition: transform 0.3s ease-in-out;
				}
		
				.card:hover {
					transform: translateY(-5px);
				}
		
				.card-image {
					width: 100%;
					height: auto;
				}
		
				.card-details {
					padding: 20px;
				}
		
				.card-title {
					font-size: 18px;
					margin-bottom: 10px;
				}
		
				.card-description {
					font-size: 14px;
					color: #666;
					margin-bottom: 15px;
				}
		
				.card-footer {
					display: flex;
					justify-content: space-between;
					align-items: center;
				}
		
				.card-price {
					font-size: 16px;
					font-weight: bold;
				}
		
				.btn-add-to-cart {
					background-color: #007bff;
					color: #fff;
					border: none;
					padding: 8px 16px;
					border-radius: 5px;
					cursor: pointer;
					transition: background-color 0.3s ease-in-out;
				}
		
				.btn-add-to-cart:hover {
					background-color: #0056b3;
				}
			</style>
			<body>
				<div class="card">
					<img src="https://i.ibb.co/Btng5RP/michael-wave-CYn-QUywz-Bt-I-unsplash.jpg" alt="Product Image" class="card-image" />
					<div class="card-details">
						<h2 class="card-title">Product Name</h2>
						<p class="card-description">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
							et hendrerit leo.
						</p>
						<div class="card-footer">
							<span class="card-price">$19.99</span>
							<button class="btn-add-to-cart">Add to Cart</button>
						</div>
					</div>
				</div>
			</body>
		</html>
		`);
	} else if (req.url === "/posts" && req.method === "GET") {
		// res.writeHead(200, {
		// 	"Content-Type": "application/json",
		// 	email: "prantosheikh834@gmail.com",
		// });
		res.setHeader("Content-Type", "application/json");
		res.statusCode = 200;
		res.end(JSON.stringify(posts));
	} else {
		res.end("Not Found.");
	}
});

server.listen(5000, "127.0.0.1", () => {
	console.log("Server is listening on port 5000");
});
