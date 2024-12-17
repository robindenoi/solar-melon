import { useState } from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { differenceInYears } from "date-fns";
import { useToast } from "@/hooks/use-toast";
import DateSelectors from "./DateSelectors";
import BirthDateCalendar from "./BirthDateCalendar";

interface AgeVerificationProps {
  onVerificationSuccess: () => void;
}

const AgeVerification = ({ onVerificationSuccess }: AgeVerificationProps) => {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [month, setMonth] = useState<number>(new Date().getMonth());
  const [year, setYear] = useState<number>(new Date().getFullYear());
  const { toast } = useToast();

  const handleDateSelect = (date: Date | undefined) => {
    if (!date) return;
    
    const age = differenceInYears(new Date(), date);
    
    if (age >= 18) {
      localStorage.setItem("ageVerified", "true");
      onVerificationSuccess();
      toast({
        title: "Welcome",
        description: "Age verification successful. Welcome to our website!",
      });
    } else {
      toast({
        variant: "destructive",
        title: "Access Denied",
        description: "You must be 18 or older to access this website.",
      });
    }
  };

  return (
    <AlertDialog open={true}>
      <AlertDialogContent className="bg-rich-black border border-gold/20 w-[95%] max-w-lg mx-auto overflow-hidden">
        <AlertDialogHeader className="mb-4">
          <AlertDialogTitle className="text-gold font-cinzel text-xl text-center">
            Age Verification Required
          </AlertDialogTitle>
          <AlertDialogDescription className="text-gold/80 text-center">
            You must be 18 years or older to enter this website.
            Please select your date of birth:
          </AlertDialogDescription>
        </AlertDialogHeader>
        
        <div className="flex flex-col space-y-4 max-h-[calc(100vh-200px)] overflow-y-auto px-2">
          <DateSelectors
            month={month}
            year={year}
            setMonth={setMonth}
            setYear={setYear}
          />

          <BirthDateCalendar
            selectedDate={selectedDate}
            handleDateSelect={handleDateSelect}
            month={month}
            year={year}
            setMonth={setMonth}
            setYear={setYear}
          />
        </div>
        
        <AlertDialogFooter className="sm:justify-center mt-4">
          <Button
            variant="outline"
            onClick={() => window.location.href = "https://www.google.com"}
            className="w-full sm:w-auto border-gold text-gold hover:bg-gold hover:text-rich-black font-cinzel transition-colors duration-300"
          >
            Exit Website
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AgeVerification;