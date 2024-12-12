# Prompt Engineering

## Prompt Construction

### Clear and Specific

This prompt will generate a more general response:

```Tell me about video games.```

This prompt will generate a more specific response:

```How did video games evolve from Pong to Elden Ring?```

### Contextual and Detailed

Less contextual/detailed:

```How can I be a successful investor?```

More contextual/detailed:

```How can I use a tax-deferred retirement account to build wealth? Explain it to me as someone with very little investment knowledge.```

### Open-Ended vs. Close-Ended

Open-ended:

```What are some good vacation destinations?```

Close-ended:

```Is Santa Fe a good place to take my family on vacation?```

## Prompt Techniques

### Zero-shot prompting

No example provided in prompt

```What is the best source of news?```

### One-shot prompting

A single example provided in prompt

```What is the best source of news? I've been getting my news from TikTok.```

### Few-shot prompting

Providing multiple examples in a prompt

```What is the best source of news? I learn about the world from TikTok, BBC, word of mouth in the neighborhood, and the Denver Post. I don't really trust most cable news.```

## Chain of Thought Prompting

The prompt guides the model to generate step-by-step reasoning by including some step-by-step reasoning in the prompt.

Rather than

```Which is the best week of the year to visit Florida?```

You may say

```I'd like to pick a week to visit Florida. The summer months are bad for me because I can't tolerate the heat and humidity. I would also avoid Christmas, Thanksgiving, and Easter, because there are too many travellers at hose times. However, my children have school Monday through Friday from September to June. They have some breaks and I'm willing to take them out of school. When should I go?```

You may also ask for a factual answer, but include a request to explain the reasoning:

```How much fencing material will I need for a square lawn that takes up a quarter acre? Explain your reasoning.```

## Prompt Citations

You can ask the model to provide citations.

### No citations requested

```Is it healthier to eat a Big Mac and then do cardio exercise to burn off the calories, or to skip the Big Mac and the exercise?```

### General citations requested

```Is it healthier to eat a Big Mac and then do cardio exercise to burn off the calories, or to skip the Big Mac and the exercise? Provide citations.```

### Specific citation format

```Is it healthier to eat a Big Mac and then do cardio exercise to burn off the calories, or to skip the Big Mac and the exercise? Provide citations. Answer using only reliable sources and cite those sources using API in-text citations.```

## Follow-up Prompts

You can reply to a response from an AI model with another prompt, and the model can respond, taking into account an earlier prompt. For example, you may ask

```What are some popular programming languages?```

And then follow-up with:

```Which of those should I learn first?```

And maybe:

```Which of those is the most marketable?```

## Code Generation

```Write a function for sorting an array of objects by last name and then first name.```

or

```Write a function in C# for sorting an array of objects by last name and then first name.```

or

```Write a program in C# that allows me to input names and birthdates, and will generate output sorted by any of the fields I input. Ensure to check that the input is not blank, and the dates are valid and in the past.```