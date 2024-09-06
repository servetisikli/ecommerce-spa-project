import React from "react";
import {
  Flex,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
  SimpleGrid,
  useBreakpointValue,
} from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";

function getAverageRating(reviews) {
  if (!reviews.length) return { averageRating: 0, numReviews: 0 };
  const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
  const averageRating = totalRating / reviews.length;
  return { averageRating, numReviews: reviews.length };
}

function Rating({ rating, numReviews }) {
  return (
    <Box display="flex" alignItems="center">
      {Array(5)
        .fill("")
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: "1" }}
                color={i < rating ? "teal.500" : "gray.300"}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: "1" }} />;
          }
          return <BsStar key={i} style={{ marginLeft: "1" }} />;
        })}
      <Box as="span" ml="2" color="gray.600" fontSize="sm">
        {numReviews} review{numReviews > 1 && "s"}
      </Box>
    </Box>
  );
}

function ProductCard({ product }) {
  const { averageRating, numReviews } = getAverageRating(product.reviews);

  return (
    <Box
      bg={useColorModeValue("white", "gray.800")}
      borderWidth="1px"
      rounded="lg"
      shadow="lg"
      position="relative"
      height="450px" // height
      width="full"   // full width within the grid item
    >
      {/* Top Rated Badge */}
      {averageRating >= 4 && (
        <Badge
          rounded="full"
          px="2"
          fontSize="0.8em"
          colorScheme="green"
          position="absolute"
          top={2}
          right={2}
        >
          Top Rated
        </Badge>
      )}

      {/* Product Image */}
      <Box display="flex" justifyContent="center" alignItems="center">
        <Image
          src={product.images[0]} // First image from the array
          alt={`Picture of ${product.title}`}
          roundedTop="lg"
          boxSize="300px"
          objectFit="contain"
        />
      </Box>

      <Box p="6">
        {/* Product Category */}
        <Box display="flex" alignItems="baseline">
          {product.category && (
            <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="blue">
              {product.category}
            </Badge>
          )}
        </Box>

        {/* Product Title and Add to Cart */}
        <Flex mt="1" justifyContent="space-between" alignContent="center">
          <Box
            fontSize="2xl"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {product.title}
          </Box>
          <Tooltip
            label="Add to cart"
            bg="white"
            placement={"top"}
            color={"gray.800"}
            fontSize={"1.2em"}
          >
            <chakra.a href={"#"} display={"flex"}>
              <Icon as={FiShoppingCart} h={7} w={7} alignSelf={"center"} />
            </chakra.a>
          </Tooltip>
        </Flex>

        {/* Rating and Price */}
        <Flex justifyContent="space-between" alignContent="center">
          <Rating rating={averageRating} numReviews={numReviews} />
          <Box fontSize="2xl" color={useColorModeValue("gray.800", "white")}>
            <Box as="span" color={"gray.600"} fontSize="lg">
              £
            </Box>
            {product.price.toFixed(2)}
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

function ProductGrid({ products }) {
  const columns = useBreakpointValue({ base: 1, md: 2, lg: 3 });

  return (
    <SimpleGrid columns={columns} spacing={10} p={5}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </SimpleGrid>
  );
}

export default ProductGrid;
