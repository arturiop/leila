import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

interface DemoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const DemoModal = ({ open, onOpenChange }: DemoModalProps) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    industry: "",
    teamSize: "",
    focus: "",
    guidelines: "",
    employeeContacts: "",
    consent: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!formData.consent) {
      toast.error("Please confirm that you understand how Leila will use your data");
      return;
    }
  
    setLoading(true);
  
    try {
      const response = await fetch("https://75dbf6298eb4.ngrok-free.app/try-demo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "true", // 👈 bypass ngrok browser warning
        },
        body: JSON.stringify({
          company_name: formData.companyName,
          industry: formData.industry,
          team_size: formData.teamSize,
          focus_area: formData.focus,
          context: formData.guidelines,
          employees: formData.employeeContacts
            ? formData.employeeContacts.split(",").map((email) => ({
                email: email.trim(),
                name: email.split("@")[0],
              }))
            : [],
        }),
      });
  
      if (!response.ok) {
        throw new Error(`Server responded with ${response.status}`);
      }
  
      const data = await response.json().catch(() => ({}));
  
      toast.success("✅ Leila is preparing your personalized voice demo!", {
        description: data?.message || "You’ll receive an invite shortly.",
      });
  
      onOpenChange(false);
      setFormData({
        companyName: "",
        industry: "",
        teamSize: "",
        focus: "",
        guidelines: "",
        employeeContacts: "",
        consent: false,
      });
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong while creating your demo. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Let's set up your Leila demo.</DialogTitle>
          <DialogDescription className="text-base">
            Tell us a bit about your company so Leila can learn how to help.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="companyName">Company Name *</Label>
            <Input
              id="companyName"
              required
              value={formData.companyName}
              onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
              placeholder="Acme Inc."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="industry">Industry *</Label>
              <Input
                id="industry"
                required
                value={formData.industry}
                onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                placeholder="Technology, Healthcare, etc."
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="teamSize">Team Size *</Label>
              <Input
                id="teamSize"
                required
                value={formData.teamSize}
                onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                placeholder="10-50, 50-200, etc."
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="focus">What do you want Leila to focus on? *</Label>
            <Input
              id="focus"
              required
              value={formData.focus}
              onChange={(e) => setFormData({ ...formData, focus: e.target.value })}
              placeholder="Culture, onboarding, wellness, engagement, etc."
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="guidelines">Upload / Paste internal guidelines or description (optional)</Label>
            <Textarea
              id="guidelines"
              value={formData.guidelines}
              onChange={(e) => setFormData({ ...formData, guidelines: e.target.value })}
              placeholder="Share any relevant company values, policies, or context..."
              rows={4}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="employeeContacts">Add employee emails or Slack IDs (optional)</Label>
            <Textarea
              id="employeeContacts"
              value={formData.employeeContacts}
              onChange={(e) => setFormData({ ...formData, employeeContacts: e.target.value })}
              placeholder="john@company.com, @jane.slack, etc."
              rows={3}
            />
          </div>

          <div className="flex items-start space-x-3">
            <Checkbox
              id="consent"
              checked={formData.consent}
              onCheckedChange={(checked) => 
                setFormData({ ...formData, consent: checked as boolean })
              }
            />
            <Label 
              htmlFor="consent" 
              className="text-sm leading-relaxed cursor-pointer"
            >
              Yes, I understand Leila will use this only for demo setup and will handle it with care.
            </Label>
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="submit"
              size="lg"
              className="flex-1"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Preparing Demo...
                </>
              ) : (
                "Start Demo"
              )}
            </Button>
            
            <Button
              type="button"
              variant="ghost"
              size="lg"
              onClick={() => onOpenChange(false)}
              disabled={loading}
            >
              Cancel
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
