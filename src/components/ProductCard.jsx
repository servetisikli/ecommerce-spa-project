import React from "react";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  Heading,
  Icon,
  Image,
  Stack,
  Text,
  Tooltip,
  chakra,
} from "@chakra-ui/react";
import { FiShoppingCart } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import useCart from "../hooks/useCart";

function ProductCard({ product }) {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src={product.thumbnail}
          alt={product.title}
          borderRadius="lg"
          cursor="pointer"
          onClick={handleCardClick}
          _hover={{ opacity: 0.8 }}
        />
        <Stack align="start" mt="2" spacing="3">
          <Heading
            size="sm"
            textAlign="left"
            cursor="pointer"
            onClick={handleCardClick}
            _hover={{ textDecoration: "underline" }}
          >
            {product.title}
          </Heading>
          <Text textAlign="left" fontSize="sm">
            {product.description}
          </Text>
        </Stack>
      </CardBody>
      <Stack spacing="3" align="start" px="4" py="2">
        <Text
          color="red.600"
          fontWeight={"bold"}
          fontSize="lg"
          textAlign="left"
        >
          ${product.price}
        </Text>
        <ButtonGroup spacing="2" width="full">
          <Button
            onClick={(e) => {
              e.stopPropagation();
              addToCart(product);
            }}
            variant="solid"
            colorScheme="yellow"
            width="full"
          >
            <Tooltip>
              <Icon
                as={FiShoppingCart}
                h={5}
                w={5}
                alignSelf={"center"}
                mr={2}
              />
            </Tooltip>
            Add to Cart
          </Button>
        </ButtonGroup>
      </Stack>
    </Card>
  );
}

export default ProductCard;
