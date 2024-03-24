import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  HStack,
  Skeleton,
  SkeletonCircle,
  Stack,
} from "@chakra-ui/react";
import Navbar from "../common/navbar";
import Searchbar from "../common/searchbar";
import { times } from "lodash";

export default function IdeaPageSkeleton() {
  return (
    <Box as="main" p={4} maxW="6xl" mx="auto">
      <Navbar />
      <Box p={4}>
        <Searchbar size="lg" mt={12} maxWidth="xl" mx="auto" mb={12} />
      </Box>
      <Breadcrumb separator=">">
        <BreadcrumbItem>
          <Skeleton height={6} w={12} />
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Skeleton height={6} w={12} />
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <Skeleton height={6} w={24} />
        </BreadcrumbItem>
      </Breadcrumb>
      <Stack spacing={20} mt={8} color="white">
        <Stack spacing={6}>
          <Skeleton height={16} />
          <HStack>
            <SkeletonCircle size="10" />
            <Skeleton height={6} w={24} />
          </HStack>
        </Stack>
        {times(3, (index) => (
          <Stack key={index} spacing={12}>
            <Skeleton height={12} w={80} />
            <Stack spacing={4}>
              {times(3, (index) => (
                <Skeleton key={index} height={4} />
              ))}
              <Skeleton height={4} w={3 / 5} />
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
}
