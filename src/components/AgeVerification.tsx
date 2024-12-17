import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { differenceInYears } from "date-fns";
import { useToast } from "@/hooks/use-toast";

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

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);

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
          <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4">
            <Select
              value={month.toString()}
              onValueChange={(value) => setMonth(parseInt(value))}
            >
              <SelectTrigger className="w-full sm:w-[140px] bg-rich-black border-gold/20 text-gold">
                <SelectValue placeholder="Month" />
              </SelectTrigger>
              <SelectContent className="bg-rich-black border-gold/20 max-h-[200px] overflow-y-auto">
                {months.map((monthName, index) => (
                  <SelectItem
                    key={index}
                    value={index.toString()}
                    className="text-gold hover:bg-gold/20"
                  >
                    {monthName}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select
              value={year.toString()}
              onValueChange={(value) => setYear(parseInt(value))}
            >
              <SelectTrigger className="w-full sm:w-[100px] bg-rich-black border-gold/20 text-gold">
                <SelectValue placeholder="Year" />
              </SelectTrigger>
              <SelectContent className="bg-rich-black border-gold/20 max-h-[200px] overflow-y-auto">
                {years.map((year) => (
                  <SelectItem
                    key={year}
                    value={year.toString()}
                    className="text-gold hover:bg-gold/20"
                  >
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex justify-center">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={handleDateSelect}
              disabled={(date) => date > new Date()}
              defaultMonth={new Date(year, month)}
              month={new Date(year, month)}
              onMonthChange={(date) => {
                setMonth(date.getMonth());
                setYear(date.getFullYear());
              }}
              className="rounded-md border border-gold/20 bg-rich-black text-gold w-full max-w-[350px]"
            />
          </div>
        </div>
        
        <AlertDialogFooter className="sm:justify-center mt-4">
          <Button
            variant="outline"
            onClick={() => window.location.href = "https://www.google.com"}
            className="w-full sm:w-auto border-gold text-gold hover:bg-gold hover:text-rich-black font-cinzel"
          >
            Exit Website
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AgeVerification;