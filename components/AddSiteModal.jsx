import React, { useRef } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
  InputGroup,
  InputLeftAddon,
  FormControl,
  FormLabel,
  Button,
  ButtonGroup,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { mutate } from "swr";
import { createSite } from "@/lib/db";
import { useAuth } from "@/lib/auth";

export const AddSiteModal = ({ children, ...pageProps }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const auth = useAuth();

  const submitSite = ({ namasitus, linksitus }) => {
    //? if linksitus ada https then biarin aja, else if ada http then biarin aja, else return https
    const moddedData = {
      namasitus,
      linksitus: linksitus.includes("https://")
        ? linksitus
        : linksitus.includes("http://")
        ? linksitus
        : `https://${linksitus}`,
    };

    const newSite = {
      authorId: auth.user.uid,
      createdAt: new Date().toUTCString(),
      ...moddedData,
    };

    createSite(newSite);

    toast({
      title: "Sukses.",
      description: `Situs anda dengan nama ${namasitus} berhasil ditambahkan.`,
      status: "success",
      duration: 5000,
      isClosable: true,
      variant: "left-accent",
    });

    reset();
    mutate(
      "/api/sites",
      async (data) => {
        console.log("🚀 ~ file: AddSiteModal.jsx ~ line 71 ~ data", data);
        console.log({ sites: [...data.sites, newSite] });
        return { sites: [...data.sites, newSite] };
      },
      false
    );
    onClose();
  };

  return (
    <>
      <Button onClick={onOpen} {...pageProps}>
        {children}
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent as="form" onSubmit={handleSubmit(submitSite)}>
          <ModalHeader fontWeight="bold">Tambah Situs</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <FormControl id="namasitus" my={3}>
              <FormLabel>Nama Situs</FormLabel>
              <Input
                placeholder="Nama Situs Anda"
                name="namasitus"
                {...register("namasitus", {
                  required: "Harus Diisi!",
                })}
              />
              <ErrorMessage
                errors={errors}
                name="namasitus"
                render={({ message }) => (
                  <Text color="red.600">⚠️ {message}</Text>
                )}
              />
            </FormControl>
            <FormControl id="linksitus">
              <FormLabel>Link Situs</FormLabel>
              <InputGroup>
                <InputLeftAddon children="https://" />
                <Input
                  placeholder="www.website.com"
                  name="linksitus"
                  {...register("linksitus", { required: "Harus Diisi!" })}
                />
              </InputGroup>
              <ErrorMessage
                errors={errors}
                name="linksitus"
                render={({ message }) => (
                  <Text color="red.600">⚠️ {message}</Text>
                )}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <ButtonGroup variant="solid" spacing="6">
              <Button onClick={onClose} colorScheme="red" fontWeight="medium">
                Batal
              </Button>
              <Button
                variant="solid"
                backgroundColor="#99FFFE"
                color="#19D4C"
                fontWeight="bold"
                type="submit"
              >
                Simpan
              </Button>
            </ButtonGroup>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
