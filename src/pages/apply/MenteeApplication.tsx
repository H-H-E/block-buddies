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
  Gamepad2,
  User,
  Mail,
  Shield,
  Sparkles,
} from 'lucide-react';

const steps = [
  { id: 1, title: 'Child Info', icon: User },
  { id: 2, title: 'Parent Info', icon: Mail },
  { id: 3, title: 'Experience', icon: Gamepad2 },
  { id: 4, title: 'Setup & Consent', icon: Shield },
];

const experienceLevels = [
  { value: 'new', label: 'Brand new to Minecraft', description: 'Has not played yet, or only watched others play' },
  { value: 'some', label: 'Some play time', description: 'Can move around, break and place blocks with some help' },
  { value: 'comfortable', label: 'Comfortable player', description: 'Plays independently and can explain favorite things to do' },
];

const interestOptions = [
  'Building houses and structures',
  'Animals, farms, and nature',
  'Stories, characters, and role-play',
  'Exploring caves and new places',
  'Make/Show/Tell/Try/Fix activities',
  'Just having fun with a buddy!',
];

const editionOptions = [
  { value: 'bedrock', label: 'Bedrock (Windows, phone, tablet, or console)' },
  { value: 'java', label: 'Java (PC / Mac)' },
  { value: 'not-sure', label: 'Not sure which edition we have' },
];

const platformOptions = [
  'Windows PC', 'Mac', 'iPhone/iPad', 'Android tablet/phone',
  'Xbox', 'PlayStation', 'Nintendo Switch',
];

const inputOptions = [
  { value: 'touch', label: 'Touch screen' },
  { value: 'controller', label: 'Game controller' },
  { value: 'keyboard-mouse', label: 'Keyboard and mouse' },
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
  <div className={`rounded-lg border transition-all ${checked ? 'border-secondary bg-secondary/10' : 'border-border hover:border-secondary/50'}`}>
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

type RadioOptionProps = {
  name: string;
  value: string;
  label: string;
  description?: string;
  checked: boolean;
  onChange: () => void;
};

const RadioOption = ({ name, value, label, description, checked, onChange }: RadioOptionProps) => (
  <label className={`block cursor-pointer rounded-lg border p-4 transition-all focus-within:ring-2 focus-within:ring-ring ${checked ? 'border-secondary bg-secondary/10' : 'border-border hover:border-secondary/50'}`}>
    <input className="sr-only" type="radio" name={name} value={value} checked={checked} onChange={onChange} />
    <span className="font-medium">{label}</span>
    {description && <span className="mt-1 block text-sm text-muted-foreground">{description}</span>}
  </label>
);

const MenteeApplication = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [showPreview, setShowPreview] = useState(false);
  const [formData, setFormData] = useState({
    childName: '',
    childAge: '',
    parentName: '',
    parentEmail: '',
    parentPhone: '',
    experienceLevel: '',
    minecraftEdition: '',
    platforms: [] as string[],
    inputMethods: [] as string[],
    interests: [] as string[],
    availability: [] as string[],
    accessibilityNeeds: '',
    hasMinecraft: false,
    hasWebcam: false,
    parentalConsent: false,
    safetyAcknowledgment: false,
  });

  const updateFormData = (field: string, value: string | boolean) => {
    setFormData((previous) => ({ ...previous, [field]: value }));
  };

  const toggleArrayItem = (field: 'platforms' | 'inputMethods' | 'interests' | 'availability', item: string) => {
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
        return Boolean(formData.childName.trim() && isAgeInRange(formData.childAge, 6, 10));
      case 2:
        return Boolean(formData.parentName.trim() && isPlausibleEmail(formData.parentEmail));
      case 3:
        return Boolean(
          formData.experienceLevel &&
          formData.minecraftEdition &&
          formData.platforms.length > 0 &&
          formData.interests.length > 0 &&
          formData.inputMethods.length > 0 &&
          formData.availability.length > 0,
        );
      case 4:
        return Boolean(formData.hasMinecraft && formData.hasWebcam && formData.parentalConsent && formData.safetyAcknowledgment);
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
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/10 px-4 py-2 text-sm font-medium text-secondary">
                <Sparkles className="h-4 w-4" />
                Learner Sign Up
              </span>
              <h1 className="mb-4 font-display text-3xl font-bold md:text-4xl">Sign Up Your Child</h1>
              <p className="text-muted-foreground">This should take about 5 minutes to complete.</p>
            </div>

            <div role="note" className="mb-8 rounded-lg border border-amber-500/40 bg-amber-500/10 p-4 text-sm text-foreground">
              <strong>Preview only:</strong> this form is not connected to an application service. Your answers stay on this page for review; nothing is submitted, saved, or sent.
            </div>

            <div className="mb-12 flex justify-between">
              {steps.map((step, index) => (
                <div key={step.id} className="flex flex-1 items-center">
                  <div className="flex flex-1 flex-col items-center">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-full transition-all ${currentStep >= step.id ? 'bg-secondary text-secondary-foreground' : 'bg-muted text-muted-foreground'}`}>
                      {currentStep > step.id ? <CheckCircle2 className="h-5 w-5" /> : <step.icon className="h-5 w-5" />}
                    </div>
                    <span className={`mt-2 hidden text-xs sm:block ${currentStep >= step.id ? 'text-foreground' : 'text-muted-foreground'}`}>{step.title}</span>
                  </div>
                  {index < steps.length - 1 && <div className={`mx-2 h-0.5 flex-1 transition-all ${currentStep > step.id ? 'bg-secondary' : 'bg-muted'}`} />}
                </div>
              ))}
            </div>

            <div className="glass-card p-6 md:p-8">
              <AnimatePresence mode="wait">
                {currentStep === 1 && (
                  <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                    <h2 className="mb-6 font-display text-xl font-bold">About Your Child</h2>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <Label htmlFor="childName">Child's First Name *</Label>
                        <Input id="childName" value={formData.childName} onChange={(event) => updateFormData('childName', event.target.value)} placeholder="First name" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="childAge">Child's Age (6-10) *</Label>
                        <Input id="childAge" type="number" min="6" max="10" step="1" inputMode="numeric" value={formData.childAge} onChange={(event) => updateFormData('childAge', event.target.value)} placeholder="6-10" aria-describedby="childAgeHint" className="mt-1" />
                        <p id="childAgeHint" className="mt-1 text-xs text-muted-foreground">Learners in this pilot are around age 7.</p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {currentStep === 2 && (
                  <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                    <h2 className="mb-6 font-display text-xl font-bold">Parent/Guardian Information</h2>
                    <div>
                      <Label htmlFor="parentName">Your Full Name *</Label>
                      <Input id="parentName" value={formData.parentName} onChange={(event) => updateFormData('parentName', event.target.value)} placeholder="Parent/Guardian name" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="parentEmail">Your Email *</Label>
                      <Input id="parentEmail" type="email" value={formData.parentEmail} onChange={(event) => updateFormData('parentEmail', event.target.value)} placeholder="you@example.com" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="parentPhone">Phone Number (optional)</Label>
                      <Input id="parentPhone" type="tel" value={formData.parentPhone} onChange={(event) => updateFormData('parentPhone', event.target.value)} placeholder="(555) 123-4567" className="mt-1" />
                    </div>
                  </motion.div>
                )}

                {currentStep === 3 && (
                  <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                    <h2 className="mb-6 font-display text-xl font-bold">Minecraft & Interests</h2>
                    <fieldset>
                      <legend className="mb-3 block font-medium">How much has your child played Minecraft? *</legend>
                      <div className="space-y-3">
                        {experienceLevels.map((level) => <RadioOption key={level.value} name="experienceLevel" {...level} checked={formData.experienceLevel === level.value} onChange={() => updateFormData('experienceLevel', level.value)} />)}
                      </div>
                    </fieldset>
                    <fieldset>
                      <legend className="mb-3 block font-medium">Which edition of Minecraft does your child have? *</legend>
                      <p className="mb-3 text-sm text-muted-foreground">Bedrock is the pilot's first choice for young learners.</p>
                      <div className="space-y-3">
                        {editionOptions.map((option) => <RadioOption key={option.value} name="minecraftEdition" {...option} checked={formData.minecraftEdition === option.value} onChange={() => updateFormData('minecraftEdition', option.value)} />)}
                      </div>
                    </fieldset>
                    <fieldset>
                      <legend className="mb-3 block font-medium">What device(s) will your child play on? *</legend>
                      <div className="space-y-3">
                        {platformOptions.map((option) => <CheckboxOption key={option} id={optionId('platform', option)} label={option} checked={formData.platforms.includes(option)} onChange={() => toggleArrayItem('platforms', option)} />)}
                      </div>
                    </fieldset>
                    <fieldset>
                      <legend className="mb-3 block font-medium">How will your child control the game? *</legend>
                      <div className="space-y-3">
                        {inputOptions.map((option) => <CheckboxOption key={option.value} id={optionId('input', option.value)} label={option.label} checked={formData.inputMethods.includes(option.value)} onChange={() => toggleArrayItem('inputMethods', option.value)} />)}
                      </div>
                    </fieldset>
                    <div>
                      <Label htmlFor="accessibilityNeeds">Accessibility or support needs (optional)</Label>
                      <Textarea id="accessibilityNeeds" value={formData.accessibilityNeeds} onChange={(event) => updateFormData('accessibilityNeeds', event.target.value)} placeholder="Share anything that would help us make sessions welcoming and comfortable." className="mt-1 min-h-[96px]" />
                    </div>
                    <fieldset>
                      <legend className="mb-3 block font-medium">What does your child love in Minecraft? *</legend>
                      <div className="grid gap-3 sm:grid-cols-2">
                        {interestOptions.map((option) => <CheckboxOption key={option} id={optionId('interest', option)} label={option} checked={formData.interests.includes(option)} onChange={() => toggleArrayItem('interests', option)} />)}
                      </div>
                    </fieldset>
                    <fieldset>
                      <legend className="mb-3 block font-medium">Available times for sessions *</legend>
                      <div className="grid gap-3 sm:grid-cols-2">
                        {availabilityOptions.map((option) => <CheckboxOption key={option} id={optionId('availability', option)} label={option} checked={formData.availability.includes(option)} onChange={() => toggleArrayItem('availability', option)} />)}
                      </div>
                    </fieldset>
                  </motion.div>
                )}

                {currentStep === 4 && (
                  <motion.div key="step4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                    <h2 className="mb-6 font-display text-xl font-bold">Technical Setup & Consent</h2>
                    <div className="space-y-4">
                      <CheckboxOption id="hasMinecraft" label="My child has Minecraft (any edition) *" description="Bedrock on Windows, phone, tablet, or console, or Java on PC / Mac." checked={formData.hasMinecraft} onChange={(checked) => updateFormData('hasMinecraft', checked)} />
                      <CheckboxOption id="hasWebcam" label="We have a webcam and microphone *" description="Required for video call sessions with the mentor." checked={formData.hasWebcam} onChange={(checked) => updateFormData('hasWebcam', checked)} />
                      <CheckboxOption id="parentalConsent" label="I give consent for my child to participate *" description="I consent to my child participating in supervised video call mentoring sessions." checked={formData.parentalConsent} onChange={(checked) => updateFormData('parentalConsent', checked)} />
                      <CheckboxOption id="safetyAcknowledgment" label="I acknowledge the safety guidelines *" description="I understand I can observe sessions anytime and will receive progress updates." checked={formData.safetyAcknowledgment} onChange={(checked) => updateFormData('safetyAcknowledgment', checked)} />
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
                  <Button type="button" variant="secondary" onClick={nextStep} disabled={!canProceed()}>
                    Continue
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                ) : (
                  <Button type="button" variant="hero" onClick={handlePreview} disabled={!canProceed()}>
                    <Sparkles className="mr-2 h-4 w-4" />
                    Review application preview
                  </Button>
                )}
              </div>
            </div>
            {showPreview && (
              <div role="status" aria-live="polite" className="mt-6 rounded-lg border border-secondary/40 bg-secondary/10 p-5">
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

export default MenteeApplication;
