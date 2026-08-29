import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  GraduationCap,
  User,
  Mail,
  Gamepad2,
  Clock,
  Heart,
} from 'lucide-react';

const steps = [
  { id: 1, title: 'About You', icon: User },
  { id: 2, title: 'Mentorship Interests', icon: Gamepad2 },
  { id: 3, title: 'Availability', icon: Clock },
  { id: 4, title: 'Agreements', icon: CheckCircle2 },
];

const mentorshipInterestOptions = [
  'Building houses and cozy spaces',
  'Survival basics and gathering resources',
  'Storytelling, characters, and role-play',
  'Beginner navigation and exploring safely',
  'Animals, farms, and nature',
  'Make/Show/Tell/Try/Fix activities',
];

const availabilityOptions = [
  'Monday afternoons',
  'Monday evenings',
  'Tuesday afternoons',
  'Tuesday evenings',
  'Wednesday afternoons',
  'Wednesday evenings',
  'Thursday afternoons',
  'Thursday evenings',
  'Friday afternoons',
  'Friday evenings',
  'Saturday mornings',
  'Saturday afternoons',
  'Sunday mornings',
  'Sunday afternoons',
];

const isAgeInRange = (value: string, minimum: number, maximum: number) => {
  const age = Number(value);
  return value.trim() !== '' && Number.isInteger(age) && age >= minimum && age <= maximum;
};

const isPlausibleEmail = (value: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(value.trim());

const optionId = (prefix: string, value: string) =>
  `${prefix}-${value.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;

type CheckboxOptionProps = {
  id: string;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  description?: string;
};

const CheckboxOption = ({ id, label, checked, onChange, description }: CheckboxOptionProps) => (
  <div className={`rounded-lg border transition-all ${checked ? 'border-primary bg-primary/10' : 'border-border hover:border-primary/50'}`}>
    <div className="flex items-start gap-3 p-3">
      <Checkbox
        id={id}
        checked={checked}
        onCheckedChange={(nextChecked) => onChange(nextChecked === true)}
        aria-label={label}
        className="mt-1"
      />
      <Label htmlFor={id} className="flex-1 cursor-pointer">
        <span className="text-sm font-medium">{label}</span>
        {description && <span className="mt-1 block text-sm text-muted-foreground">{description}</span>}
      </Label>
    </div>
  </div>
);

const MentorApplication = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [showPreview, setShowPreview] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    school: '',
    email: '',
    parentEmail: '',
    mentorshipInterests: [] as string[],
    bedrockReady: false,
    whyMentor: '',
    availability: [] as string[],
    codeOfConduct: false,
    parentApproval: false,
    commitment: false,
    safetyCommitment: false,
    parentCommunicationAgreement: false,
  });

  const updateFormData = (field: string, value: string | boolean) => {
    setFormData((previous) => ({ ...previous, [field]: value }));
  };

  const toggleArrayItem = (field: 'mentorshipInterests' | 'availability', item: string) => {
    setFormData((previous) => ({
      ...previous,
      [field]: previous[field].includes(item)
        ? previous[field].filter((entry) => entry !== item)
        : [...previous[field], item],
    }));
  };

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep((previous) => previous + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep((previous) => previous - 1);
  };

  const handlePreview = () => {
    setShowPreview(true);
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return Boolean(
          formData.name.trim() &&
          isAgeInRange(formData.age, 14, 18) &&
          isPlausibleEmail(formData.email) &&
          isPlausibleEmail(formData.parentEmail),
        );
      case 2:
        return Boolean(formData.mentorshipInterests.length > 0 && formData.whyMentor.trim() && formData.bedrockReady);
      case 3:
        return Boolean(formData.availability.length > 0);
      case 4:
        return Boolean(
          formData.codeOfConduct &&
          formData.parentApproval &&
          formData.commitment &&
          formData.safetyCommitment &&
          formData.parentCommunicationAgreement,
        );
      default:
        return false;
    }
  };

  return (
    <Layout>
      <section className="min-h-screen pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="section-container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mx-auto max-w-2xl">
            <div className="mb-12 text-center">
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                <GraduationCap className="h-4 w-4" />
                Mentor Application
              </span>
              <h1 className="mb-4 font-display text-3xl font-bold md:text-4xl">Become a Block Buddy Mentor</h1>
              <p className="text-muted-foreground">This should take about 5 minutes to complete.</p>
            </div>

            <div role="note" className="mb-8 rounded-lg border border-amber-500/40 bg-amber-500/10 p-4 text-sm text-foreground">
              <strong>Preview only:</strong> this form is not connected to an application service. Your answers stay on this page for review; nothing is submitted, saved, or sent.
            </div>

            <div className="mb-12 flex justify-between">
              {steps.map((step, index) => (
                <div key={step.id} className="flex flex-1 items-center">
                  <div className="flex flex-1 flex-col items-center">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-full transition-all ${currentStep >= step.id ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
                      {currentStep > step.id ? <CheckCircle2 className="h-5 w-5" /> : <step.icon className="h-5 w-5" />}
                    </div>
                    <span className={`mt-2 hidden text-xs sm:block ${currentStep >= step.id ? 'text-foreground' : 'text-muted-foreground'}`}>{step.title}</span>
                  </div>
                  {index < steps.length - 1 && <div className={`mx-2 h-0.5 flex-1 transition-all ${currentStep > step.id ? 'bg-primary' : 'bg-muted'}`} />}
                </div>
              ))}
            </div>

            <div className="glass-card p-6 md:p-8">
              <AnimatePresence mode="wait">
                {currentStep === 1 && (
                  <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                    <h2 className="mb-6 font-display text-xl font-bold">About You</h2>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input id="name" value={formData.name} onChange={(event) => updateFormData('name', event.target.value)} placeholder="Your name" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="age">Age (14-18) *</Label>
                        <Input id="age" type="number" min="14" max="18" step="1" inputMode="numeric" value={formData.age} onChange={(event) => updateFormData('age', event.target.value)} placeholder="14-18" className="mt-1" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="school">School (optional)</Label>
                      <Input id="school" value={formData.school} onChange={(event) => updateFormData('school', event.target.value)} placeholder="Your school name" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="email">Your Email *</Label>
                      <Input id="email" type="email" value={formData.email} onChange={(event) => updateFormData('email', event.target.value)} placeholder="you@example.com" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="parentEmail">Parent/Guardian Email *</Label>
                      <Input id="parentEmail" type="email" value={formData.parentEmail} onChange={(event) => updateFormData('parentEmail', event.target.value)} placeholder="parent@example.com" className="mt-1" />
                      <p className="mt-1 text-xs text-muted-foreground">A parent or guardian needs to be included because mentors are 14-18.</p>
                    </div>
                  </motion.div>
                )}

                {currentStep === 2 && (
                  <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                    <h2 className="mb-6 font-display text-xl font-bold">Mentorship Interests</h2>
                    <fieldset>
                      <legend className="mb-3 block font-medium">What would you enjoy helping a young learner explore? *</legend>
                      <p className="mb-4 text-sm text-muted-foreground">Select all that fit. These are Bedrock-first activities for learners around age 7.</p>
                      <div className="grid gap-3 sm:grid-cols-2">
                        {mentorshipInterestOptions.map((option) => <CheckboxOption key={option} id={optionId('mentorship-interest', option)} label={option} checked={formData.mentorshipInterests.includes(option)} onChange={() => toggleArrayItem('mentorshipInterests', option)} />)}
                      </div>
                    </fieldset>
                    <CheckboxOption id="bedrockReady" label="I can mentor in Minecraft Bedrock *" description="The pilot is Bedrock-first, with simple Make/Show/Tell/Try/Fix activities." checked={formData.bedrockReady} onChange={(checked) => updateFormData('bedrockReady', checked)} />
                    <div>
                      <Label htmlFor="whyMentor">Why do you want to be a mentor? *</Label>
                      <Textarea id="whyMentor" value={formData.whyMentor} onChange={(event) => updateFormData('whyMentor', event.target.value)} placeholder="Tell us what excites you about helping younger learners..." className="mt-1 min-h-[120px]" />
                    </div>
                  </motion.div>
                )}

                {currentStep === 3 && (
                  <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                    <h2 className="mb-6 font-display text-xl font-bold">Your Availability</h2>
                    <div>
                      <fieldset>
                        <legend className="mb-3 block font-medium">When are you available for sessions? *</legend>
                        <p className="mb-4 text-sm text-muted-foreground">Select all times that work for you. Sessions are 45 minutes.</p>
                        <div className="grid gap-3 sm:grid-cols-2">
                          {availabilityOptions.map((option) => <CheckboxOption key={option} id={optionId('mentor-availability', option)} label={option} checked={formData.availability.includes(option)} onChange={() => toggleArrayItem('availability', option)} />)}
                        </div>
                      </fieldset>
                    </div>
                  </motion.div>
                )}

                {currentStep === 4 && (
                  <motion.div key="step4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                    <h2 className="mb-6 font-display text-xl font-bold">Agreements</h2>
                    <div className="space-y-4">
                      <CheckboxOption id="codeOfConduct" label="I agree to the Code of Conduct *" description="I will be respectful, patient, and follow all safety guidelines when working with learners." checked={formData.codeOfConduct} onChange={(checked) => updateFormData('codeOfConduct', checked)} />
                      <CheckboxOption id="parentApproval" label="I have my parent/guardian's approval *" description="My parent or guardian knows about and supports my participation in this program." checked={formData.parentApproval} onChange={(checked) => updateFormData('parentApproval', checked)} />
                      <CheckboxOption id="safetyCommitment" label="I commit to our child-safety rules *" description="Sessions happen on supervised video calls, I follow the communication policy, and I report any safety concern to coordinators immediately." checked={formData.safetyCommitment} onChange={(checked) => updateFormData('safetyCommitment', checked)} />
                      <CheckboxOption id="parentCommunicationAgreement" label="I agree to keep parents informed *" description="I will share a short summary after each session and respond to parent/guardian questions promptly." checked={formData.parentCommunicationAgreement} onChange={(checked) => updateFormData('parentCommunicationAgreement', checked)} />
                      <CheckboxOption id="commitment" label="I commit to the 8-week program *" description="I understand this requires weekly 45-minute sessions and some prep time." checked={formData.commitment} onChange={(checked) => updateFormData('commitment', checked)} />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <div className="mt-8 flex justify-between border-t border-border pt-6">
                <Button type="button" variant="ghost" onClick={prevStep} disabled={currentStep === 1}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
                </Button>
                {currentStep < 4 ? (
                  <Button type="button" variant="hero" onClick={nextStep} disabled={!canProceed()}>
                    Continue
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                ) : (
                  <Button type="button" variant="hero" onClick={handlePreview} disabled={!canProceed()}>
                    <Heart className="mr-2 h-4 w-4" />
                    Review application preview
                  </Button>
                )}
              </div>
            </div>
            {showPreview && (
              <div role="status" aria-live="polite" className="mt-6 rounded-lg border border-primary/40 bg-primary/10 p-5">
                <h2 className="font-display text-lg font-bold">Preview ready</h2>
                <p className="mt-1 text-sm text-muted-foreground">This is a local preview only. Nothing was submitted, saved, or sent, and this page will not navigate away.</p>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default MentorApplication;
