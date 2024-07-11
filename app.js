express = require('express')
app = express()
port = 3000

app.use(express.static('public'))

app.get('/',(req,res)=>{
    // res.send('Hello World')
    res.sendFile(__dirname+'/main.html')
})

app.get('/process',(req,res)=>{
    // res.send('Hello World')
    // res.sendFile(__dirname+'/main.html')
    var maths = req.query.maths;
    var hindi = req.query.hindi;
    var sports = req.query.sports;
    var science = req.query.science;
    var total = parseInt(maths)+parseInt(hindi)+parseInt(sports)+parseInt(science);
    var percentage = (parseInt(maths)+parseInt(hindi)+parseInt(sports)+parseInt(science))/4;
    // res.send(`hii ${total}`)
    const tableHTML = `
    <table border='1'>
      <thead>
        <tr>
          <th>Subject</th>
          <th>Marks</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Maths</td>
          <td>${maths}</td>
        </tr>
        <tr>
          <td>Hindi</td>
          <td>${hindi}</td>
        </tr>
        <tr>
          <td>Sports</td>
          <td>${sports}</td>
        </tr>
        <tr>
          <td>Science</td>
          <td>${science}</td>
        </tr>
        <tr>
          <th>Sum</td>
          <td>${total}</td>
        </tr>
        <tr>
          <th>Percentage</td>
          <td>${percentage}</td>
        </tr>
      </tbody>
    </table>
  `;
  res.send(tableHTML);
})

app.get('/contact',(req,res)=>{
    // res.send('Hello World')
    res.sendFile(__dirname+'/contact.html')
})

app.get('/main',(req,res)=>{
    // res.send('About')
    res.sendFile(__dirname+'/main.html')
})

app.get('/about',(req,res)=>{
    // res.send('About')
    res.sendFile(__dirname+'/about.html')
})

app.get('/sum',(req,res)=>{
    // var a = 10
    // var b = 20
    // var c = a + b
    // res.send(`Value of A is ${a} <br/> Value of B is ${b} <br/>Sum is ${c} <br/>`)
    res.sendFile(__dirname+'/sum.html')
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})