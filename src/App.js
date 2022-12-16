import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {


  const [value, setvalue] = useState("")

  var t=0;
  function btn1() 
  {
    if(t%2==0)
    {
      document.getElementById('no1').value = "X";
    }
    else
    {
      document.getElementById('no1').value = "O";
    }
    t++;
    newgame();
  }

  function btn2() 
  {
    if(t%2==0)
    {
      document.getElementById('no2').value = "X";
    }
    else
    {
      document.getElementById('no2').value = "O";
    }
    t++;
    newgame();
  }

  function btn3() 
  {
    if(t%2==0)
    {
      document.getElementById('no3').value = "X";
    }
    else
    {
      document.getElementById('no3').value = "O";
    }
    t++;
    newgame();
  }

  function btn4() 
  {
    if(t%2==0)
    {
      document.getElementById('no4').value = "X";
    }
    else
    {
      document.getElementById('no4').value = "O";
    }
    t++;
    newgame();
  }

  function btn5() 
  {
    if(t%2==0)
    {
      document.getElementById('no5').value = "X";
    }
    else
    {
      document.getElementById('no5').value = "O";
    }
    t++;
    newgame();
  }

  function btn6() 
  {
    if(t%2==0)
    {
      document.getElementById('no6').value = "X";
    }
    else
    {
      document.getElementById('no6').value = "O";
    }
    t++;
    newgame();
  }

  function btn7() 
  {
    if(t%2==0)
    {
      document.getElementById('no7').value = "X";
    }
    else
    {
      document.getElementById('no7').value = "O";
    }
    t++;
    newgame();
  }

  function btn8() 
  {
    if(t%2==0)
    {
      document.getElementById('no8').value = "X";
    }
    else
    {
      document.getElementById('no8').value = "O";
    }
    t++;
    newgame();
  }

  function btn9() 
  {
    if(t%2==0)
    {
      document.getElementById('no9').value = "X";
    }
    else
    {
      document.getElementById('no9').value = "O";
    }
    t++;
    newgame();
  }


  function newgame() 
			{
				var b1 = document.getElementById('no1').value;
				var b2 = document.getElementById('no2').value;
				var b3 = document.getElementById('no3').value;
				var b4 = document.getElementById('no4').value;
				var b5 = document.getElementById('no5').value;
				var b6 = document.getElementById('no6').value;
				var b7 = document.getElementById('no7').value;
				var b8 = document.getElementById('no8').value;
				var b9 = document.getElementById('no9').value;
			
				if(b1=="X" && b2=="X" && b3=="X")
				{
					document.write("You Win");
				}
				if(b1=="X" && b4=="X" && b7=="X")
				{
					document.write("You Win");
				}
				if(b1=="X" && b5=="X" && b9=="X")
				{
					document.write("You Win");
				}
				if(b2=="X" && b5=="X" && b8=="X")
				{
					document.write("You Win");
				}
				if(b3=="X" && b5=="X" && b7=="X")
				{
					document.write("You Win");
				}
				if(b3=="X" && b6=="X" && b9=="X")
				{
					document.write("You Win");
				}
				if(b4=="X" && b5=="X" && b6=="X")
				{
					document.write("You Win");
				}
				if(b7=="X" && b8=="X" && b9=="X")
				{
					document.write("You Win");
				}
				if(b1=="O" && b2=="O" && b3=="O")
				{
					document.write("You Win");
				}
				if(b1=="O" && b4=="O" && b7=="O")
				{
					document.write("You Win");	
				}
				if(b1=="O" && b5=="O" && b9=="O")
				{
					document.write("You Win");
				}
				if(b2=="O" && b5=="O" && b8=="O")
				{
					document.write("You Win");
				}
				if(b3=="O" && b5=="O" && b7=="O")
				{
					document.write("You Win");
				}
				if(b3=="O" && b6=="O" && b9=="O")
				{
					document.write("You Win");
				}
				if(b4=="O" && b5=="O" && b6=="O")
				{
					document.write("You Win");
				}
				if(b7=="O" && b8=="O" && b9=="O")
				{
					document.write("You Win");
				}
			}

  // const btn2 = () => {

  //   if (t % 2 == 0) {
  //     alert('x')
  //   }
  //   else {
  //     alert('0')
  //   }
  //   t++;

  // }

  // const btn3 = () => {

  //   if (t % 2 == 0) {
  //     alert('x')
  //   }
  //   else {
  //     alert('0')
  //   }
  //   t++;

  // }

  // const btn4 = () => {
  //   if (t % 2 == 0) {
  //     alert('x')
  //   }
  //   else {
  //     alert('0')
  //   }
  //   t++;

  // }

  // const btn5 = () => {
  //   if (t % 2 == 0) {
  //     alert('x')
  //   }
  //   else {
  //     alert('0')
  //   }
  //   t++;

  // }

  // const btn6 = () => {
  //   if (t % 2 == 0) {
  //     alert('x')
  //   }
  //   else {
  //     alert('0')
  //   }
  //   t++;

  // }

  // const btn7 = () => {
  //   if (t % 2 == 0) {
  //     alert('x')
  //   }
  //   else {
  //     alert('0')
  //   }
  //   t++;

  // }

  // const btn8 = () => {
  //   if (t % 2 == 0) {
  //     alert('x')
  //   }
  //   else {
  //     alert('0')
  //   }
  //   t++;

  // }

  // const btn9 = () => {
  //   if (t % 2 == 0) {
  //     alert('x')
  //   }
  //   else {
  //     alert('0')
  //   }
  //   t++;

  // }



  return (
    <div className="App">


      <input type="text" value={value} id='no1' onClick={btn1} />
      <input type="text" value={value} id='no2' onClick={btn2} />
      <input type="text" value={value} id='no3' onClick={btn3} />
      <br /> <br />

      <input type="text" value={value} id='no4' onClick={btn4} />
      <input type="text" value={value} id='no5' onClick={btn5} />
      <input type="text" value={value} id='no6' onClick={btn6} />
      <br /> <br />

      <input type="text" value={value} id='no7' onClick={btn7} />
      <input type="text" value={value} id='no8' onClick={btn8} />
      <input type="text" value={value} id='no9' onClick={btn9} />




    </div>
  );
}

export default App;
