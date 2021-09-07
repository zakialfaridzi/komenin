import React from "react";
import { Heading, Text, Button, Box } from "@chakra-ui/react";
import DashboardShell from "./DashboardShell";

const FreePlanEmptyState = () => (
  <DashboardShell>
    <Box width="100%" backgroundColor="white" borderRadius="8px" p={8}>
      <Heading size="md">
        Dapatkan komentar untuk situs anda dengan cepat.
      </Heading>
      <Text>Mulai sekarang dan mulai berkembang. 🚀</Text>
      <Button>Ayo menjadi Starter</Button>
    </Box>
  </DashboardShell>
);

export default FreePlanEmptyState;
