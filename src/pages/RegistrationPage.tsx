import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SparkEffect from "@/components/SparkEffect";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import battlefieldBg from "@/assets/hero-battlefield.jpg";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().regex(/^[0-9]{10}$/, "Phone number must be 10 digits"),
  email: z.string().email("Invalid email address"),
  event: z.string().min(1, "Please select an event"),
  participationType: z.string().min(1, "Please select participation type"),
  teamName: z.string().optional(),
  teamSize: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

interface EventType {
  name: string;
  participationTypes: string[];
}

const events: EventType[] = [
  { name: "BGMI Tournament", participationTypes: ["Squad (4 players)", "Duo (2 players)"] },
  { name: "Free Fire", participationTypes: ["Squad (4 players)", "Solo"] },
  { name: "Valorant", participationTypes: ["Team (5 players)"] },
  { name: "Chess", participationTypes: ["Solo"] },
  { name: "Dance Battle", participationTypes: ["Solo", "Duo (2 dancers)", "Group (4-8 dancers)"] },
  { name: "Singing Competition", participationTypes: ["Solo", "Duet"] },
  { name: "Fashion Show", participationTypes: ["Solo", "Team (6-10 models)"] },
  { name: "Hackathon", participationTypes: ["Solo", "Team (2-4 members)"] },
  { name: "Robo War", participationTypes: ["Team (2-3 members)"] },
  { name: "Photography Contest", participationTypes: ["Solo"] },
];

const RegistrationPage = () => {
  const { toast } = useToast();
  const [selectedEvent, setSelectedEvent] = useState<EventType | null>(null);
  const [selectedParticipationType, setSelectedParticipationType] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const watchEvent = watch("event");
  const watchParticipationType = watch("participationType");

  const handleEventChange = (eventName: string) => {
    const event = events.find((e) => e.name === eventName);
    setSelectedEvent(event || null);
    setSelectedParticipationType("");
    setValue("event", eventName);
    setValue("participationType", "");
  };

  const handleParticipationTypeChange = (type: string) => {
    setSelectedParticipationType(type);
    setValue("participationType", type);
  };

  const requiresTeamInfo = selectedParticipationType && !selectedParticipationType.includes("Solo");

  const onSubmit = (data: FormData) => {
    console.log("Registration Data:", data);
    toast({
      title: "Registration Successful! 🎉",
      description: `Welcome to ${data.event}! We'll contact you soon.`,
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Background Image */}
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url(${battlefieldBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-background/95 backdrop-blur-sm" />
      </div>

      <SparkEffect />
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center pt-24">
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-orbitron font-bold mb-4 tracking-tight">
            <span className="text-primary text-glow-orange">JOIN THE</span>
            <br />
            <span className="text-foreground">BATTLE</span>
          </h1>
          <p className="text-xl md:text-2xl font-exo text-muted-foreground max-w-2xl mx-auto">
            Register now and claim your spot in SPARK 2K25
          </p>
        </div>
      </section>

      {/* Registration Form */}
      <section className="container mx-auto px-4 py-16 relative z-10 max-w-2xl">
        <Card className="border-2 border-primary/20 bg-card/95 backdrop-blur-md shadow-2xl">
          <CardHeader className="space-y-2 text-center border-b border-border pb-6">
            <CardTitle className="text-3xl font-orbitron font-bold text-primary">
              Event Registration
            </CardTitle>
            <CardDescription className="text-base">
              Fill in your details to secure your participation
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name Field */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-semibold">
                  Full Name *
                </Label>
                <Input
                  id="name"
                  {...register("name")}
                  placeholder="Enter your full name"
                  className="h-12"
                />
                {errors.name && (
                  <p className="text-sm text-destructive">{errors.name.message}</p>
                )}
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-semibold">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email")}
                  placeholder="your.email@example.com"
                  className="h-12"
                />
                {errors.email && (
                  <p className="text-sm text-destructive">{errors.email.message}</p>
                )}
              </div>

              {/* Phone Field */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-semibold">
                  Phone Number *
                </Label>
                <Input
                  id="phone"
                  {...register("phone")}
                  placeholder="10-digit mobile number"
                  maxLength={10}
                  className="h-12"
                />
                {errors.phone && (
                  <p className="text-sm text-destructive">{errors.phone.message}</p>
                )}
              </div>

              {/* Event Selection */}
              <div className="space-y-2">
                <Label htmlFor="event" className="text-sm font-semibold">
                  Select Event *
                </Label>
                <Select onValueChange={handleEventChange} value={watchEvent}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Choose your event" />
                  </SelectTrigger>
                  <SelectContent>
                    {events.map((event) => (
                      <SelectItem key={event.name} value={event.name}>
                        {event.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.event && (
                  <p className="text-sm text-destructive">{errors.event.message}</p>
                )}
              </div>

              {/* Participation Type (Conditional) */}
              {selectedEvent && (
                <div className="space-y-2 animate-fade-in">
                  <Label htmlFor="participationType" className="text-sm font-semibold">
                    Participation Type *
                  </Label>
                  <Select
                    onValueChange={handleParticipationTypeChange}
                    value={watchParticipationType}
                  >
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Solo, Duo, or Team?" />
                    </SelectTrigger>
                    <SelectContent>
                      {selectedEvent.participationTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.participationType && (
                    <p className="text-sm text-destructive">
                      {errors.participationType.message}
                    </p>
                  )}
                </div>
              )}

              {/* Team Information (Conditional) */}
              {requiresTeamInfo && (
                <div className="space-y-4 animate-fade-in border-t border-border pt-6">
                  <h3 className="text-lg font-orbitron font-bold text-secondary">
                    Team Details
                  </h3>
                  <div className="space-y-2">
                    <Label htmlFor="teamName" className="text-sm font-semibold">
                      Team Name *
                    </Label>
                    <Input
                      id="teamName"
                      {...register("teamName")}
                      placeholder="Enter your team name"
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="teamSize" className="text-sm font-semibold">
                      Number of Members *
                    </Label>
                    <Input
                      id="teamSize"
                      type="number"
                      {...register("teamSize")}
                      placeholder="Total team members"
                      className="h-12"
                    />
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full h-14 text-lg font-orbitron font-bold mt-8"
              >
                Complete Registration
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Info Section */}
        <div className="mt-8 text-center space-y-4">
          <p className="text-sm text-muted-foreground">
            Registration is completely free for all events
          </p>
          <div className="flex flex-wrap gap-4 justify-center text-xs text-muted-foreground">
            <span>✓ Instant confirmation</span>
            <span>✓ Event updates via email</span>
            <span>✓ Certificate of participation</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RegistrationPage;
