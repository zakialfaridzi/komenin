import Feedback from "@/components/Feedback";
import { useAuth } from "@/lib/auth";
import { createFeedback } from "@/lib/db";
import { getAllFeedback, getAllSites } from "@/lib/db-admin";
import { Button } from "@chakra-ui/button";
import {
  FormControl,
  FormHelperText,
  FormLabel,
} from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Box, Text } from "@chakra-ui/layout";
import { ErrorMessage } from "@hookform/error-message";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const SiteFeedback = ({ initialFeedback }) => {
  const [allFeedback, setAllFeedback] = useState(initialFeedback);
  console.log(allFeedback);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const auth = useAuth();
  const router = useRouter();

  const onSubmit = ({ komen }) => {
    console.log("komen");
    const newFeedback = {
      author: auth.user.name,
      authorId: auth.user.uid,
      siteId: router.query.siteId,
      text: komen,
      createdAt: new Date().toISOString(),
      provider: auth.user.provider,
      status: "pending",
    };

    setAllFeedback([newFeedback, ...allFeedback]);
    createFeedback(newFeedback);
    reset();
  };

  return (
    <Box
      display="flex"
      flexDir="column"
      width="full"
      maxWidth={800}
      margin="0 auto"
    >
      <FormControl
        id="komen"
        my={8}
        as="form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormLabel>Komen</FormLabel>
        <Input
          type="comment"
          placeholder="Tulis Komen Anda"
          {...register("komen", {
            required: "Harus Diisi!",
          })}
        />
        <ErrorMessage
          errors={errors}
          name="komen"
          render={({ message }) => (
            <Text color="red.600" fontSize="s" mt={1}>
              ⚠️ {message}
            </Text>
          )}
        />
        <Button mt={3} type="submit" fontWeight="medium">
          Tambah Komen
        </Button>
      </FormControl>
      {allFeedback.map((feedback) => (
        <Feedback key={feedback.id} {...feedback} />
      ))}
    </Box>
  );
};

export async function getStaticProps(context) {
  const siteId = context.params.siteId;
  const { feedback } = await getAllFeedback(siteId);
  return {
    props: { initialFeedback: feedback },
  };
}

export async function getStaticPaths() {
  const { sites } = await getAllSites();
  const paths = sites.map((site) => ({
    params: {
      siteId: site.id.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export default SiteFeedback;
