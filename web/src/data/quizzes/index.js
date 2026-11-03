import { WEEK_1_QUIZZES } from './week-1.js';
import { WEEK_2_QUIZZES } from './week-2.js';
import { WEEK_3_QUIZZES } from './week-3.js';
import { WEEK_4_QUIZZES } from './week-4.js';
import { WEEK_5_QUIZZES } from './week-5.js';
import { WEEK_6_QUIZZES } from './week-6.js';
import { WEEK_7_QUIZZES } from './week-7.js';
import { WEEK_8_QUIZZES } from './week-8.js';

export const KNOWLEDGE_CHECKS = {
  ...WEEK_1_QUIZZES,
  ...WEEK_2_QUIZZES,
  ...WEEK_3_QUIZZES,
  ...WEEK_4_QUIZZES,
  ...WEEK_5_QUIZZES,
  ...WEEK_6_QUIZZES,
  ...WEEK_7_QUIZZES,
  ...WEEK_8_QUIZZES
};

export function validateKnowledgeChecks(articles) {
  for (const article of articles) {
    const kc = KNOWLEDGE_CHECKS[article.slug];
    if (!kc) {
      throw new Error(`Missing Knowledge Check data for article "${article.slug}"`);
    }
    if (kc.lessonId !== article.lessonId) {
      throw new Error(`Knowledge Check lessonId mismatch for "${article.slug}": expected ${article.lessonId}, got ${kc.lessonId}`);
    }
    if (!kc.masteryPromptEn || !kc.masteryPromptBn) {
      throw new Error(`Missing masteryPromptEn or masteryPromptBn for "${article.slug}"`);
    }
    if (!Array.isArray(kc.completionItems) || kc.completionItems.length < 4 || kc.completionItems.length > 6) {
      throw new Error(`Invalid completionItems count for "${article.slug}": expected 4-6 items, got ${kc.completionItems?.length}`);
    }
    for (const item of kc.completionItems) {
      if (!item.id || !item.en || !item.bn) {
        throw new Error(`Invalid completionItem in "${article.slug}": missing id, en, or bn`);
      }
    }
    if (!Array.isArray(kc.questions) || kc.questions.length < 15 || kc.questions.length > 20) {
      throw new Error(`Invalid questions count for "${article.slug}": expected 15-20 questions, got ${kc.questions?.length}`);
    }
    kc.questions.forEach((q, idx) => {
      if (!q.qEn || !q.qBn) {
        throw new Error(`Question ${idx + 1} in "${article.slug}" missing qEn or qBn`);
      }
      if (!Array.isArray(q.optionsEn) || q.optionsEn.length !== 4) {
        throw new Error(`Question ${idx + 1} in "${article.slug}" must have exactly 4 optionsEn`);
      }
      if (!Array.isArray(q.optionsBn) || q.optionsBn.length !== 4) {
        throw new Error(`Question ${idx + 1} in "${article.slug}" must have exactly 4 optionsBn`);
      }
      if (typeof q.correctIndex !== 'number' || q.correctIndex < 0 || q.correctIndex > 3) {
        throw new Error(`Question ${idx + 1} in "${article.slug}" has invalid correctIndex: ${q.correctIndex}`);
      }
      if (!q.explainEn || !q.explainBn) {
        throw new Error(`Question ${idx + 1} in "${article.slug}" missing explainEn or explainBn`);
      }
    });
  }
  return KNOWLEDGE_CHECKS;
}
