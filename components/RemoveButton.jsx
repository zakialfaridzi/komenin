import React, { useRef, useState } from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  IconButton,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { deleteFeedback } from "@/lib/db";
import { useAuth } from "@/lib/auth";
import { mutate } from "swr";

const RemoveButton = ({ feedbackId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = useRef();
  const auth = useAuth();

  const onDelete = () => {
    // console.log(feedbackId);
    deleteFeedback(feedbackId);
    mutate(
      ["/api/feedback", auth.user.token],
      async (data) => {
        return {
          feedback: data.feedback.filter(
            (feedback) => feedback.id !== feedbackId
          ),
        };
      },
      false
    );
    onClose();
  };

  return (
    <>
      <IconButton
        aria-label="Hapus Komen"
        icon={<DeleteIcon />}
        variant="solid"
        colorScheme="red"
        onClick={() => setIsOpen(true)}
      />

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        motionPreset="scale"
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Hapus Komen
            </AlertDialogHeader>

            <AlertDialogBody>Apakah anda yakin?</AlertDialogBody>

            <AlertDialogFooter>
              <Button onClick={onClose}>Batal</Button>
              <Button
                colorScheme="red"
                ref={cancelRef}
                onClick={onDelete}
                ml={3}
              >
                Hapus
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default RemoveButton;
