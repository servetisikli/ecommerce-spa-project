import React from "react";
import {
  Box,
  Button,
  VStack,
  HStack,
  Image,
  Text,
  Heading,
  List,
  ListItem,
  Divider,
  IconButton,
} from "@chakra-ui/react";
import { DeleteIcon, AddIcon } from "@chakra-ui/icons";
import useCart from "../hooks/useCart";

const Cart = () => {
  const { cart, removeFromCart, updateCartItem } = useCart();

  return (
    <Box p={5}>
      <Heading as="h2" size="lg" mb={5}>
        Shopping Cart
      </Heading>
      {cart.length === 0 ? (
        <Text>Your cart is empty</Text>
      ) : (
        <List spacing={3}>
          {cart.map((item) => (
            <ListItem key={item.id}>
              <HStack spacing={4} alignItems="center">
                <Image
                  boxSize="100px"
                  src={item.thumbnail}
                  alt={item.name}
                  borderRadius="md"
                />
                <VStack align="start" spacing={1} flex="1">
                  <Heading as="h3" size="md">
                    {item.name}
                  </Heading>
                  <Text>{item.description}</Text>
                  <Text fontWeight="bold">${item.price}</Text>
                </VStack>
                <HStack>
                  <IconButton
                    aria-label="Increase Quantity"
                    icon={<AddIcon />}
                    onClick={() =>
                      updateCartItem({ ...item, quantity: item.quantity + 1 })
                    }
                  />
                  <IconButton
                    aria-label="Remove from Cart"
                    icon={<DeleteIcon />}
                    onClick={() => removeFromCart(item.id)}
                  />
                </HStack>
              </HStack>
              <Divider my={3} />
            </ListItem>
          ))}
        </List>
      )}
      {cart.length > 0 && (
        <Button colorScheme="yellow" size="lg" width="full" mt={5}>
          Proceed to Checkout
        </Button>
      )}
    </Box>
  );
};

export default Cart;
