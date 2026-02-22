import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
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
  Laptop,
  Clock,
  Shield,
  Sparkles
} from 'lucide-react';
import { toast } from 'sonner';

const steps = [
  { id: 1, title: 'Child Info', icon: User },
  { id: 2, title: 'Parent Info', icon: Mail },
  { id: 3, title: 'Experience', icon: Gamepad2 },
  { id: 4, title: 'Setup & Consent', icon: Shield },
];

const experienceLevels = [
  { value: '0', label: 'Fluency 0', description: 'Needs heavy step-by-step support with files/setup' },
  { value: '1', label: 'Fluency 1', description: 'Can follow guided steps and complete simple edits' },
  { value: '2', label: 'Fluency 2', description: 'Can work independently and handle debugging challenges' },
];

const archetypeOptions = [
  { value: 'A', label: 'Track A: Visualist', description: 'Loves design, textures, and visuals' },
  { value: 'B', label: 'Track B: Mechanist', description: 'Loves logic, automation, and systems' },
  { value: 'C', label: 'Track C: Operator', description: 'Loves servers, rules, and moderation tools' },
];

const learningGoals = [
  'Learn how games store data (files & configs)',
  'Understand how multiplayer servers work',
  'Create custom commands and mods',
  'Set up and manage servers',
  'Learn programming basics',
  'Just have fun while learning something new!',
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

const MenteeApplication = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    childName: '',
    childAge: '',
    parentName: '',
    parentEmail: '',
    parentPhone: '',
    fluencyLevel: '',
    archetypePreference: '',
    learningGoals: [] as string[],
    availability: [] as string[],
    accessibilityNeeds: '',
    computerType: '',
    internetQuality: '',
    hasMinecraft: false,
    hasWebcam: false,
    parentalConsent: false,
    safetyAcknowledgment: false,
  });

  const updateFormData = (field: string, value: string | boolean | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleArrayItem = (field: 'learningGoals' | 'availability', item: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(item)
        ? prev[field].filter(i => i !== item)
        : [...prev[field], item]
    }));
  };

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(prev => prev + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = () => {
    console.log('Mentee Application Submitted:', formData);
    toast.success('Application submitted successfully! We\'ll be in touch soon.');
    navigate('/');
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.childName && formData.childAge;
      case 2:
        return formData.parentName && formData.parentEmail;
      case 3:
        return (
          formData.fluencyLevel &&
          formData.archetypePreference &&
          formData.learningGoals.length > 0 &&
          formData.availability.length > 0
        );
      case 4:
        return formData.hasMinecraft && formData.hasWebcam && formData.parentalConsent && formData.safetyAcknowledgment;
      default:
        return false;
    }
  };

  const profileCode = formData.fluencyLevel && formData.archetypePreference
    ? `${formData.fluencyLevel}-${formData.archetypePreference}`
    : '';

  return (
    <Layout>
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 min-h-screen">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto"
          >
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                Learner Sign Up
              </span>
              <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Sign Up Your Child
              </h1>
              <p className="text-muted-foreground">
                This should take about 5 minutes to complete.
              </p>
            </div>

            {/* Progress Steps */}
            <div className="flex justify-between mb-12">
              {steps.map((step, index) => (
                <div key={step.id} className="flex-1 flex items-center">
                  <div className="flex flex-col items-center flex-1">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                      currentStep >= step.id 
                        ? 'bg-secondary text-secondary-foreground' 
                        : 'bg-muted text-muted-foreground'
                    }`}>
                      {currentStep > step.id ? (
                        <CheckCircle2 className="w-5 h-5" />
                      ) : (
                        <step.icon className="w-5 h-5" />
                      )}
                    </div>
                    <span className={`text-xs mt-2 hidden sm:block ${currentStep >= step.id ? 'text-foreground' : 'text-muted-foreground'}`}>
                      {step.title}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`h-0.5 flex-1 mx-2 transition-all ${currentStep > step.id ? 'bg-secondary' : 'bg-muted'}`} />
                  )}
                </div>
              ))}
            </div>

            {/* Form Steps */}
            <div className="glass-card p-6 md:p-8">
              <AnimatePresence mode="wait">
                {currentStep === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h2 className="font-display text-xl font-bold mb-6">About Your Child</h2>
                    
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="childName">Child's First Name *</Label>
                        <Input
                          id="childName"
                          value={formData.childName}
                          onChange={(e) => updateFormData('childName', e.target.value)}
                          placeholder="First name"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="childAge">Child's Age *</Label>
                        <Input
                          id="childAge"
                          type="number"
                          min="9"
                          max="12"
                          value={formData.childAge}
                          onChange={(e) => updateFormData('childAge', e.target.value)}
                          placeholder="9-12"
                          className="mt-1"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {currentStep === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h2 className="font-display text-xl font-bold mb-6">Parent/Guardian Information</h2>
                    
                    <div>
                      <Label htmlFor="parentName">Your Full Name *</Label>
                      <Input
                        id="parentName"
                        value={formData.parentName}
                        onChange={(e) => updateFormData('parentName', e.target.value)}
                        placeholder="Parent/Guardian name"
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="parentEmail">Your Email *</Label>
                      <Input
                        id="parentEmail"
                        type="email"
                        value={formData.parentEmail}
                        onChange={(e) => updateFormData('parentEmail', e.target.value)}
                        placeholder="you@example.com"
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="parentPhone">Phone Number (optional)</Label>
                      <Input
                        id="parentPhone"
                        type="tel"
                        value={formData.parentPhone}
                        onChange={(e) => updateFormData('parentPhone', e.target.value)}
                        placeholder="(555) 123-4567"
                        className="mt-1"
                      />
                    </div>
                  </motion.div>
                )}

                {currentStep === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h2 className="font-display text-xl font-bold mb-6">Experience & Goals</h2>
                    
                    <div>
                      <Label className="mb-3 block">Current learner fluency *</Label>
                      <div className="space-y-3">
                        {experienceLevels.map((level) => (
                          <div
                            key={level.value}
                            onClick={() => updateFormData('fluencyLevel', level.value)}
                            className={`p-4 rounded-lg border cursor-pointer transition-all ${
                              formData.fluencyLevel === level.value
                                ? 'border-secondary bg-secondary/10'
                                : 'border-border hover:border-secondary/50'
                            }`}
                          >
                            <div className="font-medium">{level.label}</div>
                            <div className="text-sm text-muted-foreground">{level.description}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Label className="mb-3 block">Preferred starting track *</Label>
                      <div className="space-y-3">
                        {archetypeOptions.map((option) => (
                          <div
                            key={option.value}
                            onClick={() => updateFormData('archetypePreference', option.value)}
                            className={`p-4 rounded-lg border cursor-pointer transition-all ${
                              formData.archetypePreference === option.value
                                ? 'border-secondary bg-secondary/10'
                                : 'border-border hover:border-secondary/50'
                            }`}
                          >
                            <div className="font-medium">{option.label}</div>
                            <div className="text-sm text-muted-foreground">{option.description}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="accessibilityNeeds">Accessibility or support needs (optional)</Label>
                      <Textarea
                        id="accessibilityNeeds"
                        value={formData.accessibilityNeeds}
                        onChange={(e) => updateFormData('accessibilityNeeds', e.target.value)}
                        placeholder="Anything that helps us support your child better (attention, reading support, device constraints, etc.)"
                        className="mt-1 min-h-[96px]"
                      />
                    </div>

                    <div className="rounded-lg border border-secondary/30 bg-secondary/5 p-4">
                      <p className="text-sm font-medium">Profile code preview</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        {profileCode || 'Select fluency and track to generate profile code'}
                      </p>
                    </div>

                    <div>
                      <Label className="mb-3 block">What would your child like to learn? *</Label>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {learningGoals.map((goal) => (
                          <div
                            key={goal}
                            onClick={() => toggleArrayItem('learningGoals', goal)}
                            className={`p-3 rounded-lg border cursor-pointer transition-all ${
                              formData.learningGoals.includes(goal)
                                ? 'border-secondary bg-secondary/10'
                                : 'border-border hover:border-secondary/50'
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              <Checkbox checked={formData.learningGoals.includes(goal)} />
                              <span className="text-sm">{goal}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Label className="mb-3 block">Available times for sessions *</Label>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {availabilityOptions.map((option) => (
                          <div
                            key={option}
                            onClick={() => toggleArrayItem('availability', option)}
                            className={`p-3 rounded-lg border cursor-pointer transition-all ${
                              formData.availability.includes(option)
                                ? 'border-secondary bg-secondary/10'
                                : 'border-border hover:border-secondary/50'
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              <Checkbox checked={formData.availability.includes(option)} />
                              <span className="text-sm">{option}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {currentStep === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h2 className="font-display text-xl font-bold mb-6">Technical Setup & Consent</h2>
                    
                    <div className="space-y-4">
                      <div
                        onClick={() => updateFormData('hasMinecraft', !formData.hasMinecraft)}
                        className={`p-4 rounded-lg border cursor-pointer transition-all ${
                          formData.hasMinecraft
                            ? 'border-secondary bg-secondary/10'
                            : 'border-border hover:border-secondary/50'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <Checkbox checked={formData.hasMinecraft} className="mt-1" />
                          <div>
                            <span className="font-medium">My child has Minecraft Java Edition *</span>
                            <p className="text-sm text-muted-foreground mt-1">
                              Installed on a PC or Mac computer (not mobile or console).
                            </p>
                          </div>
                        </div>
                      </div>

                      <div
                        onClick={() => updateFormData('hasWebcam', !formData.hasWebcam)}
                        className={`p-4 rounded-lg border cursor-pointer transition-all ${
                          formData.hasWebcam
                            ? 'border-secondary bg-secondary/10'
                            : 'border-border hover:border-secondary/50'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <Checkbox checked={formData.hasWebcam} className="mt-1" />
                          <div>
                            <span className="font-medium">We have a webcam and microphone *</span>
                            <p className="text-sm text-muted-foreground mt-1">
                              Required for video call sessions with the mentor.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div
                        onClick={() => updateFormData('parentalConsent', !formData.parentalConsent)}
                        className={`p-4 rounded-lg border cursor-pointer transition-all ${
                          formData.parentalConsent
                            ? 'border-secondary bg-secondary/10'
                            : 'border-border hover:border-secondary/50'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <Checkbox checked={formData.parentalConsent} className="mt-1" />
                          <div>
                            <span className="font-medium">I give consent for my child to participate *</span>
                            <p className="text-sm text-muted-foreground mt-1">
                              I consent to my child participating in supervised video call mentoring sessions.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div
                        onClick={() => updateFormData('safetyAcknowledgment', !formData.safetyAcknowledgment)}
                        className={`p-4 rounded-lg border cursor-pointer transition-all ${
                          formData.safetyAcknowledgment
                            ? 'border-secondary bg-secondary/10'
                            : 'border-border hover:border-secondary/50'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <Checkbox checked={formData.safetyAcknowledgment} className="mt-1" />
                          <div>
                            <span className="font-medium">I acknowledge the safety guidelines *</span>
                            <p className="text-sm text-muted-foreground mt-1">
                              I understand I can observe sessions anytime and will receive progress updates.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex justify-between mt-8 pt-6 border-t border-border">
                <Button
                  variant="ghost"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
                
                {currentStep < 4 ? (
                  <Button
                    variant="secondary"
                    onClick={nextStep}
                    disabled={!canProceed()}
                  >
                    Continue
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                ) : (
                  <Button
                    variant="hero"
                    onClick={handleSubmit}
                    disabled={!canProceed()}
                  >
                    <Sparkles className="w-4 h-4 mr-2" />
                    Submit Application
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default MenteeApplication;
