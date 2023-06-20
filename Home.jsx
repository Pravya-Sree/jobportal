import React from "react";
import { Stack } from "@mui/material";
import { Button } from "@mui/material";
import "./style.css";
function Home() {
  return (
    <div class="anu">
      <Stack direction="row" spacing={2}>
        <div>
          <img
            src="https://i.pinimg.com/736x/d9/2c/d2/d92cd25876fa8dccc7bf630042e74db8.jpg"
            width={300}
          ></img>
          <Button variant="contained" href="ContactPage">
            CONTACT US
          </Button>
        </div>
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiEhMJgN2IMa8jEhHCLJQZYq56-CYfgORnFOhhsvMXFeP0rg-rZYfr7f63st8_0dM3LaY&usqp=CAU"
            width={300}
          ></img>

          <Button variant="contained" href="ContactPage">
            CONTACT US
          </Button>
        </div>
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4JTO3FjeAFcxN-Cuy5pThU9VCxuJuDy8j1Q&usqp=CAU"
            height={300}
            width={300}
          ></img>

          <Button variant="contained" href="ContactPage">
            CONTACT US
          </Button>
        </div>
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfGarh48FPmgDgsvbz3V2e23oXAama0PYCwA&usqp=CAU"
            height={300}
            width={300}
          ></img>

          <Button variant="contained" href="ContactPage">
            CONTACT US
          </Button>
        </div>
        <div>
          <img
            src="https://img.freepik.com/free-vector/gradient-hiring-poster-flyer-template_23-2150137321.jpg?w=2000 "
            height={300}
            width={300}
          ></img>

          <Button variant="contained" href="ContactPage">
            CONTACT US
          </Button>
        </div>
      </Stack>
      <Stack direction="row" spacing={2}>
        <div>
          <img
            src="https://i.pinimg.com/736x/e8/6d/70/e86d7071b192783dabd59a2f31e5a70f.jpg"
            height={300}
            width={300}
          ></img>

          <Button variant="contained" href="ContactPage">
            CONTACT US
          </Button>
        </div>
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJhjXDapmFOx3rZH06G4NvZOxGTlnIhBcuJJHW4O4yCzjyEfRqyj3u_jIRqNOgt9pBUaA&usqp=CAU"
            height={300}
            width={300}
          ></img>

          <Button variant="contained" href="ContactPage">
            CONTACT US
          </Button>
        </div>
      </Stack>
    </div>
  );
}

export default Home;
