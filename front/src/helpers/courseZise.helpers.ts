import { ICourseSize } from "@/interfaces/types";

export const courseSizeHelpers: ICourseSize[] = [
    {
        id: 1, 
        size: 'Small', 
        tokens: '3 tokens', 
        featureOne: '3 lessons',
        featureTwo: '3 - 6 topics per lesson',
        featureThree: 'quiz for each topic',
        featureFour: 'analytics'
    },
    {
        id: 2, 
        size: 'Medium', 
        tokens: '6 tokens', 
        featureOne: '6 lessons',
        featureTwo: '3 - 6 topics per lesson',
        featureThree: 'quiz for each topic',
        featureFour: 'analytics'
    },
    {
        id: 3, 
        size: 'Large', 
        tokens: '12 tokens', 
        featureOne: '12 lessons',
        featureTwo: '3 - 6 topics per lesson',
        featureThree: 'quiz for each topic',
        featureFour: 'analytics'
    }
]