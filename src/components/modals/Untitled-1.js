// const Login = ({ setToken }) => {
  
//   const [email, setEmail] = useState();
//   const [password, setPassword] = useState();
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const submitHandler = async () => {
//     setLoading(true);
//     try {
//       const config = {
//         headers: {
//           "Content-type": "application/json",*/}
//         },
//         setToken(token);
//       };

//       const data = await axios.post(
//         "https://oliomart.herokuapp.com/newbuyer/login",
//         { email, password },
//         config
//       );

//       console.log("login successful");

//       localStorage.setItem("userInfo", JSON.stringify(data));
//       setLoading(false);
//       navigate("/cards");
//     } catch (error) {
//       console.log("erorrrrr");
//     }
//   }; 