document.getElementById('analyzeButton').addEventListener('click', analyzeSymptoms);

function analyzeSymptoms() {
  const symptomInput = document.getElementById('symptomInput').value;
  const diagnosisResult = document.getElementById('diagnosisResult');
  const treatmentPlan = document.getElementById('treatmentPlan');

  // Simulating AI-powered diagnosis and treatment
  if (symptomInput.toLowerCase().includes('fever')) {
    diagnosisResult.textContent = 'Diagnosis: Viral Infection';
    treatmentPlan.textContent = 'Treatment Plan: Rest, stay hydrated, and take over-the-counter medication for fever and pain relief.';
  } else if (symptomInput.toLowerCase().includes('cough') && symptomInput.toLowerCase().includes('shortness of breath')) {
    diagnosisResult.textContent = 'Diagnosis: Respiratory Illness';
    treatmentPlan.textContent = 'Treatment Plan: Seek medical attention, as you may require further evaluation and treatment.';
  } else {
    diagnosisResult.textContent = 'Diagnosis: Unknown';
    treatmentPlan.textContent = 'Treatment Plan: Please consult a healthcare professional for a proper diagnosis and treatment plan.';
  }
}