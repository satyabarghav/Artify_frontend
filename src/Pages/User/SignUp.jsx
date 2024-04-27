import ArtifyWhite from "@/assets/Artify_white.png";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from 'sonner'
// import { Toaster } from "@/components/ui/sonner";

const AuthPage = () => {
  const [message, setMessage] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const updateUserName = (e) => {
    setUserName(e.target.value);
  };
  const updateEmail = (e) => {
    setEmail(e.target.value);
  };
  const updatePass = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = {
        username: userName,
        email: email,
        password: password,
      };
      const response = await axios.post(
        "https://artify-server-enba.onrender.com/register",
        formData
      );
      if (response.status === 201) {
        setMessage("Registration successful! Redirecting to login page...");
        setEmail("");
        setPassword("");
        setUserName("");
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      } else {
        setMessage("Error Occured! Please try again later.");
        toast.error(message)
        setTimeout(() => {
        navigate("/register");
        },5000);
      }
      toast.success(message, {
        description: "Registration successful! Redirecting to login page...",
      });
    } catch (e) {
      console.log(e.message);
    }
  };
  const imageUrls = [
    "https://images.unsplash.com/photo-1549366021-9f761d450615?q=80&w=1906&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1700404837919-6380f4fc097c?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1484589065579-248aad0d8b13?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRhcmslMjBwYWludGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1542887800-faca0261c9e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGFya3xlbnwwfDF8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1488730792340-bdc88feffb98?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGRhcmt8ZW58MHwxfDB8fHww",
    "https://images.unsplash.com/photo-1509978778156-518eea30166b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGRhcmt8ZW58MHwxfDB8fHww",
  ];
  const quotes = [
    {
      quote: "Art is not what you see, but what you make others see.",
      speaker: "Edgar Degas",
    },
    {
      quote:
        "The purpose of art is washing the dust of daily life off our souls.",
      speaker: "Pablo Picasso",
    },
    { quote: "Creativity takes courage.", speaker: "Henri Matisse" },
    {
      quote: "Every artist was first an amateur.",
      speaker: "Ralph Waldo Emerson",
    },
    {
      quote:
        "Art enables us to find ourselves and lose ourselves at the same time.",
      speaker: "Thomas Merton",
    },
    {
      quote: "The job of the artist is always to deepen the mystery.",
      speaker: "Francis Bacon",
    },
    {
      quote: "Art should comfort the disturbed and disturb the comfortable.",
      speaker: "Banksy",
    },
    {
      quote: "The best way to predict the future is to create it.",
      speaker: "Abraham Lincoln",
    },
    {
      quote: "Art is the lie that enables us to realize the truth.",
      speaker: "Pablo Picasso",
    },
    {
      quote: "The true work of art is but a shadow of the divine perfection.",
      speaker: "Michelangelo",
    },
  ];
  const [randomUrl, setRadomUrl] = useState("");
  const [randomQuote, setRandomQuote] = useState("");

  useEffect(() => {
    setRadomUrl(imageUrls[Math.floor(Math.random() * imageUrls.length)]);
    setRandomQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, []);

  return (
    <>
      <Toaster richColors />
      <div className="overflow-hidden rounded-[0.5rem] border bg-background shadow">
        <div className="container relative h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
          <a
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 absolute right-4 top-4 md:right-8 md:top-8"
            href="/login"
          >
            Login
          </a>
          <div
            className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex"
            style={{
              backgroundImage: `url(${randomUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* <div className="absolute inset-0 bg-zinc-900"></div> */}

            <div className="relative z-20 flex items-center text-lg font-medium">
              <Link to="/">
                <img
                  src={ArtifyWhite}
                  alt="Artify Logo"
                  className="z-10"
                  width={200}
                  height="auto"
                />
              </Link>
            </div>
            <div className="relative z-20 mt-auto">
              <blockquote className="space-y-2">
                <p className="text-lg">{randomQuote.quote}</p>
                <footer className="text-sm">{randomQuote.speaker}</footer>
              </blockquote>
            </div>
          </div>
          <div className="lg:p-8">
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
              <div className="flex flex-col space-y-2 text-center">
                <h1 className="text-2xl font-semibold tracking-tight">
                  Create an account
                </h1>
                <p className="text-sm text-muted-foreground">
                  Enter the fields to create your account
                </p>
              </div>
              <div className="grid gap-6">
                <form onSubmit={handleSubmit}>
                  <div className="grid gap-2">
                    <div className="grid gap-3 pb-2">
                      <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 sr-only"
                        // for="email"
                      >
                        Username
                      </label>
                      <input
                        value={userName}
                        onChange={updateUserName}
                        className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        id="username"
                        placeholder="username"
                        // autocapitalize="none"
                        // autocomplete="email"
                        // autocorrect="off"
                        type="text"
                      />
                      <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 sr-only"
                        // for="email"
                      >
                        Email
                      </label>
                      <input
                        value={email}
                        onChange={updateEmail}
                        className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        id="email"
                        placeholder="name@example.com"
                        // autocapitalize="none"
                        // autocomplete="email"
                        // autocorrect="off"
                        type="email"
                      />
                      <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 sr-only"
                        // for="email"
                      >
                        Password
                      </label>
                      <input
                        value={password}
                        onChange={updatePass}
                        className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        id="password"
                        placeholder="••••••••••"
                        // autocapitalize="none"
                        // autocomplete="email"
                        // autocorrect="off"
                        type="password"
                      />
                    </div>
                    <button
                      className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2"
                      type="submit"
                    >
                      Sign up
                    </button>
                  </div>
                </form>
              </div>
              <p className="px-8 text-center text-sm text-muted-foreground">
                By clicking continue, you agree to our{" "}
                <a
                  className="underline underline-offset-4 hover:text-primary"
                  href="/termsofservice"
                >
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  className="underline underline-offset-4 hover:text-primary"
                  href="/privacy"
                >
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AuthPage;
