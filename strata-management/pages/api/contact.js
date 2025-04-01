export default function handler(req, res) {
    if (req.method === 'POST') {
      // process the form data here (e.g., save it or log it)
      console.log("Form submission:", req.body);
      res.status(302).setHeader('Location', '/thankyou');
      res.end();
    } else {
      res.status(405).end(); // Method Not Allowed
    }
  }
