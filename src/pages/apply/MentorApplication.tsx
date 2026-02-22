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
  GraduationCap,
  User,
  Mail,
  School,
  Gamepad2,
  Clock,
  Heart
} from 'lucide-react';
import { toast } from 'sonner';

const steps = [
  { id: 1, title: 'About You', icon: User },
  { id: 2, title: 'Experience', icon: Gamepad2 },
  { id: 3, title: 'Availability', icon: Clock },
  { id: 4, title: 'Agreements', icon: CheckCircle2 },
];

const experienceOptions = [
  'Config/options file editing',
  'Running local servers',
  'Port forwarding & networking',
  'Command blocks',
  'Data packs / resource packs',
  'Mods (Forge/Fabric)',
  'Plugin development',
  'Server administration',
];

const trackOptions = [
  { value: 'visualist', label: 'Track A: Visualist (design and visuals)' },
  { value: 'mechanist', label: 'Track B: Mechanist (logic and automation)' },
  { value: 'operator', label: 'Track C: Operator (servers and roles)' },
];

const fluencySupportOptions = [
  { value: '0', label: 'Fluency 0: heavy scaffolding' },
  { value: '1', label: 'Fluency 1: guided practice' },
  { value: '2', label: 'Fluency 2: challenge/fade mode' },
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

const MentorApplication = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    school: '',
    email: '',
    parentEmail: '',
    experience: [] as string[],
    preferredTrack: '',
    supportedFluency: [] as string[],
    whyMentor: '',
    availability: [] as string[],
    codeOfConduct: false,
    parentApproval: false,
    commitment: false,
    masteryLogging: false,
  });

  const updateFormData = (field: string, value: string | boolean | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleArrayItem = (field: 'experience' | 'availability' | 'supportedFluency', item: string) => {
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
    console.log('Mentor Application Submitted:', formData);
    toast.success('Application submitted successfully! We\'ll be in touch soon.');
    navigate('/');
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.name && formData.age && formData.email && formData.parentEmail;
      case 2:
        return (
          formData.experience.length > 0 &&
          formData.whyMentor &&
          formData.preferredTrack &&
          formData.supportedFluency.length > 0
        );
      case 3:
        return formData.availability.length > 0;
      case 4:
        return formData.codeOfConduct && formData.parentApproval && formData.commitment && formData.masteryLogging;
      default:
        return false;
    }
  };

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
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                <GraduationCap className="w-4 h-4" />
                Mentor Application
              </span>
              <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Become a Block Buddy Mentor
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
                        ? 'bg-primary text-primary-foreground' 
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
                    <div className={`h-0.5 flex-1 mx-2 transition-all ${currentStep > step.id ? 'bg-primary' : 'bg-muted'}`} />
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
                    <h2 className="font-display text-xl font-bold mb-6">About You</h2>
                    
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => updateFormData('name', e.target.value)}
                          placeholder="Your name"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="age">Age *</Label>
                        <Input
                          id="age"
                          type="number"
                          min="14"
                          max="17"
                          value={formData.age}
                          onChange={(e) => updateFormData('age', e.target.value)}
                          placeholder="14-17"
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="school">School (optional)</Label>
                      <Input
                        id="school"
                        value={formData.school}
                        onChange={(e) => updateFormData('school', e.target.value)}
                        placeholder="Your school name"
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Your Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => updateFormData('email', e.target.value)}
                        placeholder="you@example.com"
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="parentEmail">Parent/Guardian Email *</Label>
                      <Input
                        id="parentEmail"
                        type="email"
                        value={formData.parentEmail}
                        onChange={(e) => updateFormData('parentEmail', e.target.value)}
                        placeholder="parent@example.com"
                        className="mt-1"
                      />
                      <p className="text-xs text-muted-foreground mt-1">
                        We'll send them information about the program.
                      </p>
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
                    <h2 className="font-display text-xl font-bold mb-6">Experience & Track Fit</h2>
                    
                    <div>
                      <Label className="mb-3 block">What have you done with Minecraft? *</Label>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {experienceOptions.map((option) => (
                          <div
                            key={option}
                            onClick={() => toggleArrayItem('experience', option)}
                            className={`p-3 rounded-lg border cursor-pointer transition-all ${
                              formData.experience.includes(option)
                                ? 'border-primary bg-primary/10 text-foreground'
                                : 'border-border hover:border-primary/50'
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              <Checkbox checked={formData.experience.includes(option)} />
                              <span className="text-sm">{option}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Label className="mb-3 block">Preferred mentoring track *</Label>
                      <div className="space-y-3">
                        {trackOptions.map((option) => (
                          <div
                            key={option.value}
                            onClick={() => updateFormData('preferredTrack', option.value)}
                            className={`p-4 rounded-lg border cursor-pointer transition-all ${
                              formData.preferredTrack === option.value
                                ? 'border-primary bg-primary/10 text-foreground'
                                : 'border-border hover:border-primary/50'
                            }`}
                          >
                            <div className="text-sm">{option.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Label className="mb-3 block">Which learner fluency levels can you support? *</Label>
                      <div className="grid sm:grid-cols-1 gap-3">
                        {fluencySupportOptions.map((option) => (
                          <div
                            key={option.value}
                            onClick={() => toggleArrayItem('supportedFluency', option.value)}
                            className={`p-3 rounded-lg border cursor-pointer transition-all ${
                              formData.supportedFluency.includes(option.value)
                                ? 'border-primary bg-primary/10 text-foreground'
                                : 'border-border hover:border-primary/50'
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              <Checkbox checked={formData.supportedFluency.includes(option.value)} />
                              <span className="text-sm">{option.label}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="whyMentor">Why do you want to be a mentor? *</Label>
                      <Textarea
                        id="whyMentor"
                        value={formData.whyMentor}
                        onChange={(e) => updateFormData('whyMentor', e.target.value)}
                        placeholder="Tell us what excites you about teaching younger kids..."
                        className="mt-1 min-h-[120px]"
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
                    <h2 className="font-display text-xl font-bold mb-6">Your Availability</h2>
                    
                    <div>
                      <Label className="mb-3 block">When are you available for sessions? *</Label>
                      <p className="text-sm text-muted-foreground mb-4">
                        Select all times that work for you. Sessions are 45 minutes.
                      </p>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {availabilityOptions.map((option) => (
                          <div
                            key={option}
                            onClick={() => toggleArrayItem('availability', option)}
                            className={`p-3 rounded-lg border cursor-pointer transition-all ${
                              formData.availability.includes(option)
                                ? 'border-primary bg-primary/10 text-foreground'
                                : 'border-border hover:border-primary/50'
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
                    <h2 className="font-display text-xl font-bold mb-6">Agreements</h2>
                    
                    <div className="space-y-4">
                      <div
                        onClick={() => updateFormData('codeOfConduct', !formData.codeOfConduct)}
                        className={`p-4 rounded-lg border cursor-pointer transition-all ${
                          formData.codeOfConduct
                            ? 'border-primary bg-primary/10'
                            : 'border-border hover:border-primary/50'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <Checkbox checked={formData.codeOfConduct} className="mt-1" />
                          <div>
                            <span className="font-medium">I agree to the Code of Conduct *</span>
                            <p className="text-sm text-muted-foreground mt-1">
                              I will be respectful, patient, and follow all safety guidelines when working with mentees.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div
                        onClick={() => updateFormData('parentApproval', !formData.parentApproval)}
                        className={`p-4 rounded-lg border cursor-pointer transition-all ${
                          formData.parentApproval
                            ? 'border-primary bg-primary/10'
                            : 'border-border hover:border-primary/50'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <Checkbox checked={formData.parentApproval} className="mt-1" />
                          <div>
                            <span className="font-medium">I have my parent/guardian's approval *</span>
                            <p className="text-sm text-muted-foreground mt-1">
                              My parent or guardian knows about and supports my participation in this program.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div
                        onClick={() => updateFormData('masteryLogging', !formData.masteryLogging)}
                        className={`p-4 rounded-lg border cursor-pointer transition-all ${
                          formData.masteryLogging
                            ? 'border-primary bg-primary/10'
                            : 'border-border hover:border-primary/50'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <Checkbox checked={formData.masteryLogging} className="mt-1" />
                          <div>
                            <span className="font-medium">I agree to record Do/Explain/Debug outcomes each session *</span>
                            <p className="text-sm text-muted-foreground mt-1">
                              I understand V2 delivery requires brief structured session notes.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div
                        onClick={() => updateFormData('commitment', !formData.commitment)}
                        className={`p-4 rounded-lg border cursor-pointer transition-all ${
                          formData.commitment
                            ? 'border-primary bg-primary/10'
                            : 'border-border hover:border-primary/50'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <Checkbox checked={formData.commitment} className="mt-1" />
                          <div>
                            <span className="font-medium">I commit to the 8-week program *</span>
                            <p className="text-sm text-muted-foreground mt-1">
                              I understand this requires weekly 45-minute sessions and some prep time.
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
                    variant="hero"
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
                    <Heart className="w-4 h-4 mr-2" />
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

export default MentorApplication;
