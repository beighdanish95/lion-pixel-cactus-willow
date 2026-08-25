import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { EnquiryForm } from "@/components/enquiry-form";
import { Button } from "@/components/ui/button";

export function MeetingDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[60] bg-ink/50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 z-[70] w-[min(92vw,560px)] max-h-[90vh] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-xl bg-surface p-6 shadow-xl focus:outline-none md:p-8">
          <div className="mb-2 flex items-start justify-end">
            <Dialog.Title className="sr-only">Book a meeting</Dialog.Title>
            <Dialog.Close asChild>
              <Button variant="ghost" size="sm" className="h-11 w-11 px-0" aria-label="Close">
                <X className="size-5" />
              </Button>
            </Dialog.Close>
          </div>
          <EnquiryForm intent="meeting" compact onDone={() => onOpenChange(false)} />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
