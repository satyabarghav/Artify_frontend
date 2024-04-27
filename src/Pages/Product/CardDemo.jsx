/**
 * v0 by Vercel.
 * @see https://v0.dev/t/VsrYwvaldmb
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import PropTypes from "prop-types";
export default function CardDemo(props) {
  return (
    <Card className="w-full max-w-xs rounded-xl border width">
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
          <h3 className="font-semibold text-sm md:text-base">
            {props.name}
          </h3>
          <h3 className="font-serif text-sm text-gray-600 md:text-base">
            {props.artist}
          </h3>
          <p className="font-semibold text-sm md:text-base">{props.price}</p>
          <p className="text-sm md:text-base overflow-hidden">
            {props.description}
          </p>
        </div>
        <Button size="sm">Add to cart</Button>
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

