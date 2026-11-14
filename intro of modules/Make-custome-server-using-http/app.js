const http = require("http");
const app = http.createServer((req,res)=>{
    const url = req.url;

    res.writeHead(200,{"content-type" : "text/plain"});

    if(url == "/"){
        res.write("Home page");
    }
    else if(url == "/about"){
        res.write("About page");
    }
    else if(url == "/skill"){
        res.write("Skill page");
    }
    else if(url == "/project"){
        res.write("Project page");
    }
    else if(url == "/contact"){
        res.write("Contact page");
    }
    else{
        res.write("page not found");
    }
    res.end();
})

app.listen(3000);







// const http = require("http");

// const app = http.createServer((req, res) => {

//     const url = req.url;

//     res.writeHead(200, { "content-type": "text/html" });
    
//     if (url == "/") {
//         res.write(`
//         <section style="padding: 40px; text-align: center; background-color: #f4f4f4; font-family: Arial;">
//             <h2 style="color: #333; font-size: 32px;">Home Page</h2>
//             <p style="color: #666; font-size: 18px;">Welcome to our website. We are happy to have you here.</p>
//             <button style="padding: 12px 25px; background-color: #007bff; color: white; border: none; border-radius: 5px; cursor: pointer;">Get Started</button>
//         </section>
//     `);
//     }
//     else if (url == "/about") {
//         res.write(`
//         <section style="padding: 40px; text-align: center; background-color: #f9f9f9; font-family: Arial;">
//             <h2 style="color: #333; font-size: 30px;">About Us</h2>
//             <p style="color: #666; font-size: 18px;">We provide quality services to our customers.</p>
//         </section>
//     `);
//     }
//     else if (url == "/skill") {
//         res.write(`
//         <section id="skills" style="padding: 40px; text-align: center; background-color: #f4f4f4; font-family: Arial;">
//             <h2 style="color: #333; font-size: 30px;">My Skills</h2>
//             <ul style="list-style: none; padding: 0;">
//                 <li style="margin: 12px; padding: 12px; background-color: white; border-radius: 5px; color: #333;">HTML</li>
//                 <li style="margin: 12px; padding: 12px; background-color: white; border-radius: 5px; color: #333;">CSS</li>
//                 <li style="margin: 12px; padding: 12px; background-color: white; border-radius: 5px; color: #333;">JavaScript</li>
//                 <li style="margin: 12px; padding: 12px; background-color: white; border-radius: 5px; color: #333;">Python</li>
//                 <li style="margin: 12px; padding: 12px; background-color: white; border-radius: 5px; color: #333;">Web Development</li>
//             </ul>
//         </section>
//     `);
//     }
//     else if (url == "/project") {
//         res.write(`
//         <section id="projects" style="padding: 40px; text-align: center; background-color: #f9f9f9; font-family: Arial;">
//             <h2 style="color: #333; font-size: 30px;">My Projects</h2>

//             <div style="margin: 20px auto; padding: 20px; max-width: 500px; background-color: white; border-radius: 8px; box-shadow: 0 2px 8px #ccc;">
//                 <h3 style="color: #007bff;">Project 1</h3>
//                 <p style="color: #666;">Personal Portfolio Website</p>
//                 <a href="#" style="display: inline-block; padding: 10px 20px; background-color: #007bff; color: white; text-decoration: none; border-radius: 5px;">View Project</a>
//             </div>

//             <div style="margin: 20px auto; padding: 20px; max-width: 500px; background-color: white; border-radius: 8px; box-shadow: 0 2px 8px #ccc;">
//                 <h3 style="color: #007bff;">Project 2</h3>
//                 <p style="color: #666;">Online Shopping Website</p>
//                 <a href="#" style="display: inline-block; padding: 10px 20px; background-color: #007bff; color: white; text-decoration: none; border-radius: 5px;">View Project</a>
//             </div>

//             <div style="margin: 20px auto; padding: 20px; max-width: 500px; background-color: white; border-radius: 8px; box-shadow: 0 2px 8px #ccc;">
//                 <h3 style="color: #007bff;">Project 3</h3>
//                 <p style="color: #666;">Student Management System</p>
//                 <a href="#" style="display: inline-block; padding: 10px 20px; background-color: #007bff; color: white; text-decoration: none; border-radius: 5px;">View Project</a>
//             </div>
//         </section>
//     `);
//     }
//     else if (url == "/contact") {
//         res.write(`
//         <section id="contact" style="padding: 40px; text-align: center; background-color: #f4f4f4; font-family: Arial;">
//             <h2 style="color: #333; font-size: 30px;">Contact Me</h2>

//             <form action="#" method="post" style="max-width: 450px; margin: 0 auto; padding: 25px; background-color: white; border-radius: 8px; box-shadow: 0 2px 8px #ccc; text-align: left;">
//                 <label for="name" style="display: block; margin-bottom: 8px; color: #333;">Name:</label>
//                 <input type="text" id="name" name="name" required style="width: 100%; padding: 10px; margin-bottom: 20px; box-sizing: border-box; border: 1px solid #ccc; border-radius: 5px;">

//                 <label for="email" style="display: block; margin-bottom: 8px; color: #333;">Email:</label>
//                 <input type="email" id="email" name="email" required style="width: 100%; padding: 10px; margin-bottom: 20px; box-sizing: border-box; border: 1px solid #ccc; border-radius: 5px;">

//                 <label for="subject" style="display: block; margin-bottom: 8px; color: #333;">Subject:</label>
//                 <input type="text" id="subject" name="subject" required style="width: 100%; padding: 10px; margin-bottom: 20px; box-sizing: border-box; border: 1px solid #ccc; border-radius: 5px;">

//                 <label for="message" style="display: block; margin-bottom: 8px; color: #333;">Message:</label>
//                 <textarea id="message" name="message" rows="5" required style="width: 100%; padding: 10px; margin-bottom: 20px; box-sizing: border-box; border: 1px solid #ccc; border-radius: 5px; resize: vertical;"></textarea>

//                 <button type="submit" style="width: 100%; padding: 12px; background-color: #007bff; color: white; border: none; border-radius: 5px; cursor: pointer; font-size: 16px;">Send Message</button>
//             </form>
//         </section>
//     `);
//     }
//     else {
//         res.write(`
//         <section style="padding: 50px; text-align: center; font-family: Arial; background-color: #fff3f3;">
//             <h2 style="color: #dc3545; font-size: 32px;">404 - Page Not Found</h2>
//             <p style="color: #666; font-size: 18px;">Sorry, the page you are looking for does not exist.</p>
//             <a href="/" style="display: inline-block; padding: 12px 25px; background-color: #007bff; color: white; text-decoration: none; border-radius: 5px;">Go Home</a>
//         </section>
//     `);
//     }
//     res.end();

// })

// app.listen(3000);