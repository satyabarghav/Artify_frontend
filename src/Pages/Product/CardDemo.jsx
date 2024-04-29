/**
 * v0 by Vercel.
 * @see https://v0.dev/t/VsrYwvaldmb
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import PropTypes from "prop-types";
export default function CardDemo(props) {
  const handlePayment = () => {
    console.log("Payment initiated");
    const options = {
      key: "rzp_test_rt02HZsuR5f69V",
      amount: 1250 * 100,
      currency: "INR",
      name: "Book Store",
      handler: function (response) {
        alert(`Payment of Rs.${response.amount / 100}/- is Successful`);
      },
      prefill: {
        name: "admin",
        email: "onlinebookstore@gmail.com",
        contact: "7412589631",
      },
      notes: {
        address: "Razorpay Corporate office",
      },
      theme: {
        color: "8e3969",
      },
    };
    const pay = new window.Razorpay(options);
    pay.open();
  };
  return (
    <Card className="w-full max-w-xs rounded-xl border width">
      <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
      <div className="grid gap-4 p-4">
        <div className="aspect-[4/5] w-full overflow-hidden rounded-xl">
          <img
            alt="Product"
            className="aspect-[4/5] object-cover border w-full"
            height="500"
            src={props.image}
            width="400"
          />
        </div>
        <div className="grid gap-1.5">
          <h3 className="font-semibold text-sm md:text-base">{props.name}</h3>
          <h3 className="font-serif text-sm text-gray-600 md:text-base">
            {props.artist}
          </h3>
          <p className="font-semibold text-sm md:text-base">{props.price}</p>
          <p className="text-sm md:text-base overflow-hidden">
            {props.description}
          </p>
        </div>
        <Button size="sm" onClick={handlePayment}>
          Add to cart
        </Button>
      </div>
    </Card>
  );
}

CardDemo.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
};
