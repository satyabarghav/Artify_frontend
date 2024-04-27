import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "@/assets/Artify.png";
import { Link} from "react-router-dom";
import ShopNav from "@/Pages/Navbar/ShopNav";
import PaintingsNav from "@/Pages/Navbar/PaintingsNav";
import PhotographyNav from "@/Pages/Navbar/PhotographyNav";
import DrawingsNav from "@/Pages/Navbar/DrawingsNav";
import SculpturesNav from "@/Pages/Navbar/SculpturesNav";
import { Button } from "@/components/ui/button"

// const navigation = [
//   { name: "Home", href: "/" },
//   { name: "Shop", href: "/shop" },
//   { name: "Art", href: "/art" },
//   { name: "Photography", href: "/photography" },
//   { name: "Sculpture", href: "/sculpture" },
// ];
export default function Navbar2() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div>
      
      <header className=" inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-9 w-auto" src={logo} alt="Artify Logo" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {/* {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-md font-semibold leading-6 text-gray-900"
              >
                {item.name}
              </Link>
            ))} */}
            <ShopNav/>
            <PaintingsNav/>
            <PhotographyNav/>
            <DrawingsNav/>
            <SculpturesNav/>
          </div>
          <div className="hidden gap-3 lg:flex lg:flex-1 lg:justify-end">
            {/* <Link
              to="/login"
              className="text-md px-4 font-semibold leading-6 text-gray-900"
            > */}
            <Link
             to = "/login">
            <Button>Login</Button>
            </Link>

              {/* Log in <span aria-hidden="true">&rarr;</span>
            </Link> */}
            <Link
              to="/register"
            >
              <Button>Sign Up</Button>
            </Link>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img className="h- w-auto" src={logo} alt="" />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {/* {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="text-md font-semibold leading-6 text-gray-900"
                    >
                      {item.name}
                    </Link>
                  ))} */}
                  <ShopNav/>
                </div>
                <div className="py-6">
                  <Link
                    to="/login"
                    className="text-md font-semibold leading-6 text-gray-900"
                  >
                    Log in <span aria-hidden="true">&rarr;</span>
                  </Link>
                  <Link
                    to="/signup"
                    className="text-md font-semibold leading-6 text-gray-900"
                  >
                    Sign Up <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  );
}