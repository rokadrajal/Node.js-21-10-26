const http = require("http");

const app = http.createServer((req, res) => {

    const url = req.url
    // console.log(url.length);

    // res.writeHead(200, { "content-type": "text/plain" });
    res.writeHead(200, {"content-type" : "text/html"});

    if (url == "/") {
        // res.write("Create a server using HTTP modele.");
        // res.write("<h1>Create a server using HTTP modele.</h1>");
        res.write(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Home Page</title>
            </head>
            <body>

                <header>
                    <h1>Welcome to My Website</h1>

                    <nav>
                        <a href="index.html">Home</a> |
                        <a href="about.html">About</a> |
                        <a href="services.html">Services</a> |
                        <a href="contact.html">Contact</a>
                    </nav>
                </header>

                <hr>

                <main>
                    <section>
                        <h2>Home</h2>
                        <p>Welcome to our website. We provide the best services for our customers.</p>
                        <button>Get Started</button>
                    </section>

                    <section>
                        <h2>About Us</h2>
                        <p>We are a team of creative web developers. We create modern and responsive websites.</p>
                    </section>

                    <section>
                        <h2>Our Services</h2>

                        <h3>Web Design</h3>
                        <p>We create beautiful website designs.</p>

                        <h3>Web Development</h3>
                        <p>We develop professional websites.</p>

                        <h3>Support</h3>
                        <p>We provide the best customer support.</p>
                    </section>

                    <section>
                        <h2>Contact Us</h2>
                        <p>Email: example@gmail.com</p>
                        <p>Phone: +91 9876543210</p>
                    </section>
                </main>

                <hr>

                <footer>
                    <p>© 2026 My Website. All Rights Reserved.</p>
                </footer>

            </body>
            </html>
        `)            
    }
    else if (url == "/about") {
        res.write("This is about page");
    }
    else if (url == "/contant") {
        res.write("This is contant page");
    }
    else if (url == "/skill") {
        res.write("This is skill page");
    }
    else if (url == "/project") {
        res.write("This is project page");
    }
    else {
        res.write("page not found")
    }
    res.end();
});

app.listen(3000);