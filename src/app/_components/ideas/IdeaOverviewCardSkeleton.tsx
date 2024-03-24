import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  HStack,
  Skeleton,
  SkeletonCircle,
  Stack,
} from "@chakra-ui/react";

export default function IdeaOverviewCardSkeleton() {
  return (
    <Card variant="outline" color="white" _hover={{ textDecoration: "none" }}>
      <CardHeader>
        <Skeleton height={8} width="80%" />
      </CardHeader>
      <CardBody color="gray.300" py={0}>
        <Stack spacing={2}>
          <Skeleton height={4} />
          <Skeleton height={4} />
        </Stack>
      </CardBody>
      <CardFooter justifyContent="space-between" alignItems="center">
        <HStack w="full">
          <SkeletonCircle size="8" />
          <Skeleton height="20px" width="40%" />
        </HStack>
        <Skeleton height="20px" width="20%" />
      </CardFooter>
    </Card>
  );
}
