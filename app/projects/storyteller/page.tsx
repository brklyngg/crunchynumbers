'use client';

import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Upload, BookOpen, Sparkles, AlertTriangle, Loader2 } from 'lucide-react';
import { validateBookText } from '@/lib/safety';
import { parseTextFile } from '@/lib/text';
import type { BookSettings } from '@/lib/types';

import { Controls } from '@/components/Controls';
import { Search, ChevronDown, ChevronUp } from 'lucide-react';

export default function HomePage() {
  const router = useRouter();
  const [file, setFile] = useState<File | null>(null);
  const [textInput, setTextInput] = useState('');
  const [storyTitle, setStoryTitle] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [showManualInput, setShowManualInput] = useState(false);
  const [settings, setSettings] = useState<BookSettings>({
    targetAge: '6-8',
    harshness: 3,
    aestheticStyle: 'Watercolor',
    freeformNotes: '',
    desiredPageCount: 20,
    characterConsistency: true,
    // Nano Banana Pro defaults
    qualityTier: 'standard-flash',
    aspectRatio: '1:1',
    enableSearchGrounding: false,
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [searchError, setSearchError] = useState<string | null>(null);
  const [copyrightWarning, setCopyrightWarning] = useState<string | null>(null);

  const handleStorySearch = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    if (!storyTitle.trim()) {
      return;
    }

    setIsSearching(true);
    setSearchError(null);
    setCopyrightWarning(null);

    try {
      const response = await fetch('/api/story-search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: storyTitle }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to find story');
      }

      setTextInput(data.content);
      setCopyrightWarning(data.copyrightStatus === 'Public Domain' ? null : `This story may be copyrighted (${data.copyrightStatus}). We will use a summary/adaptation.`);

    } catch (error: any) {
      console.error('Search error:', error);
      setSearchError(error.message || 'An unexpected error occurred while searching.');
    } finally {
      setIsSearching(false);
    }
  };

  const handleFileUpload = useCallback(async (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0];
    if (!uploadedFile) return;

    setFile(uploadedFile);

    try {
      const text = await parseTextFile(uploadedFile);
      setTextInput(text.substring(0, 10000));

      const copyrightCheck = await validateBookText(text);
      if (copyrightCheck.isProtected) {
        setCopyrightWarning(copyrightCheck.warning || 'This content may be copyrighted');
      }
    } catch (error) {
      console.error('Error parsing file:', error);
    }
  }, []);

  const handleSubmit = async () => {
    if (!textInput.trim() && !file) {
      alert('Please provide a story first (search for a title or upload text)');
      return;
    }

    setIsProcessing(true);

    try {
      const sessionData = {
        sourceText: textInput,
        fileName: file?.name || storyTitle || 'Untitled Story',
        settings,
        timestamp: Date.now(),
      };

      const sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      localStorage.setItem(sessionId, JSON.stringify(sessionData));

      router.push(`/studio?session=${sessionId}`);
    } catch (error) {
      console.error('Error creating session:', error);
      alert('Failed to create session. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="max-w-5xl mx-auto px-4 py-8 md:py-12">

        {/* Hero Section */}
        <div className="text-center mb-8 md:mb-12 space-y-4">
          <div className="inline-flex items-center justify-center p-3 bg-white rounded-2xl shadow-sm mb-2">
            <BookOpen className="h-7 w-7 text-primary mr-2" />
            <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
              Storybook Generator
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight">
            Create Magic for <span className="text-primary">Your Child</span>
          </h1>

          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Turn any story into a beautifully illustrated picture book
          </p>
        </div>

        {/* Main Search Interface */}
        <div className="max-w-3xl mx-auto relative z-10 mb-8">
          <div className="relative">
            <form
              onSubmit={handleStorySearch}
              className="relative flex items-center bg-white rounded-2xl shadow-xl border-2 border-purple-100 p-2 transition-all focus-within:border-primary focus-within:shadow-2xl"
            >
              <Search className="h-5 w-5 text-gray-400 ml-4 flex-shrink-0" />
              <Input
                id="story-search"
                className="flex-1 border-none shadow-none focus-visible:ring-0 text-base h-12 bg-transparent placeholder:text-gray-400"
                placeholder="Search for a story (e.g., The Time Machine, Peter Pan)"
                value={storyTitle}
                onChange={(e) => setStoryTitle(e.target.value)}
                autoComplete="off"
              />
              <Button
                type="submit"
                disabled={isSearching || !storyTitle.trim()}
                size="lg"
                className="rounded-xl px-6 h-10 text-sm font-medium"
              >
                {isSearching ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Searching...
                  </>
                ) : (
                  <>
                    <Sparkles className="h-4 w-4 mr-2" />
                    Find Story
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Status Messages */}
          {searchError && (
            <div className="mt-4 p-4 bg-red-50/80 backdrop-blur-sm border border-red-200 rounded-xl flex items-start gap-3 text-red-800 animate-in fade-in slide-in-from-top-2">
              <AlertTriangle className="h-5 w-5 mt-0.5 flex-shrink-0 text-red-600" />
              <div className="text-sm">
                <strong>Search Failed:</strong> {searchError}
              </div>
            </div>
          )}

          {textInput && !showManualInput && (
            <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-xl flex items-center gap-2 text-green-800 text-sm">
              <Sparkles className="h-4 w-4 text-green-600 flex-shrink-0" />
              <span className="font-medium">Story loaded!</span>
              <span className="text-green-600">•</span>
              <span className="text-green-700">{textInput.length} characters ready</span>
            </div>
          )}

          {copyrightWarning && (
            <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-xl flex items-start gap-2 text-yellow-800 text-sm">
              <AlertTriangle className="h-4 w-4 mt-0.5 flex-shrink-0 text-yellow-600" />
              <span>{copyrightWarning}</span>
            </div>
          )}
        </div>

        {/* Configuration Section */}
        <div className="grid md:grid-cols-12 gap-6 items-start">
          {/* Settings Column */}
          <div className="md:col-span-8 space-y-4">
            <Card className="border border-purple-100 shadow-lg bg-white">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Sparkles className="h-5 w-5 text-primary" />
                  Book Settings
                </CardTitle>
                <CardDescription className="text-sm">
                  Customize the style and content for your reader
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Controls
                  settings={settings}
                  onSettingsChange={setSettings}
                  disabled={isProcessing}
                />
              </CardContent>
            </Card>

            {/* Advanced Options (Upload/Paste) */}
            <div className="text-center">
              <button
                onClick={() => setShowManualInput(!showManualInput)}
                className="inline-flex items-center gap-1 text-xs text-gray-500 hover:text-primary transition-colors py-2"
              >
                {showManualInput ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
                Or upload a file / paste text
              </button>

              {showManualInput && (
                <Card className="mt-3 border-dashed border-2 border-gray-200 bg-gray-50/50 shadow-none">
                  <CardContent className="pt-4 pb-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="file-upload" className="text-left block text-xs font-medium text-gray-600">Upload File</Label>
                        <div className="flex items-center justify-center w-full">
                          <label htmlFor="file-upload" className="flex flex-col items-center justify-center w-full h-24 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-white hover:bg-gray-50 transition-colors">
                            <Upload className="w-6 h-6 mb-1 text-gray-400" />
                            <p className="text-xs text-gray-500">PDF, EPUB, or TXT</p>
                            <Input
                              id="file-upload"
                              type="file"
                              className="hidden"
                              accept=".pdf,.epub,.txt"
                              onChange={handleFileUpload}
                            />
                          </label>
                        </div>
                        {file && <p className="text-xs text-green-600 font-medium text-left">✓ {file.name}</p>}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="text-input" className="text-left block text-xs font-medium text-gray-600">Paste Text</Label>
                        <Textarea
                          id="text-input"
                          placeholder="Paste story text..."
                          value={textInput}
                          onChange={(e) => setTextInput(e.target.value)}
                          className="h-24 resize-none text-sm"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>

          {/* Sidebar / CTA Column */}
          <div className="md:col-span-4 space-y-4">
            <Card className="bg-gradient-to-br from-primary to-purple-700 text-white border-none shadow-xl overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-2xl -ml-12 -mb-12" />

              <CardHeader className="pb-3 relative z-10">
                <CardTitle className="text-white text-lg">Ready to Create?</CardTitle>
                <CardDescription className="text-purple-100 text-sm">
                  {textInput ? 'Your story is ready!' : 'Search or upload a story first'}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 relative z-10">
                {textInput && (
                  <div className="space-y-1.5 text-xs text-purple-100 bg-white/10 rounded-lg p-3">
                    <div className="flex justify-between">
                      <span>Story</span>
                      <span className="font-medium text-white">✓ Loaded</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Pages</span>
                      <span className="font-medium text-white">{settings.desiredPageCount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Age Group</span>
                      <span className="font-medium text-white">{settings.targetAge}</span>
                    </div>
                  </div>
                )}

                <Button
                  onClick={handleSubmit}
                  disabled={isProcessing || (!textInput.trim() && !file)}
                  size="lg"
                  className="w-full bg-white text-primary hover:bg-gray-50 font-semibold shadow-lg text-base h-12 disabled:opacity-50"
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Creating...
                    </>
                  ) : (
                    <>
                      <Sparkles className="h-4 w-4 mr-2" />
                      Create Book
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>

            {/* Example Card */}
            <Card className="bg-white border border-purple-100 shadow-md">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-semibold text-gray-700">Try These Stories</CardTitle>
              </CardHeader>
              <CardContent className="text-xs text-gray-600">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors py-1" onClick={() => { setStoryTitle("The Velveteen Rabbit"); handleStorySearch(); }}>
                    <span className="w-1 h-1 rounded-full bg-primary/50" />
                    The Velveteen Rabbit
                  </li>
                  <li className="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors py-1" onClick={() => { setStoryTitle("Alice in Wonderland"); handleStorySearch(); }}>
                    <span className="w-1 h-1 rounded-full bg-primary/50" />
                    Alice in Wonderland
                  </li>
                  <li className="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors py-1" onClick={() => { setStoryTitle("Peter Pan"); handleStorySearch(); }}>
                    <span className="w-1 h-1 rounded-full bg-primary/50" />
                    Peter Pan
                  </li>
                  <li className="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors py-1" onClick={() => { setStoryTitle("The Time Machine"); handleStorySearch(); }}>
                    <span className="w-1 h-1 rounded-full bg-primary/50" />
                    The Time Machine
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}