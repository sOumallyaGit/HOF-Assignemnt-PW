const linkedinRegex = /^https:\/\/www\.linkedin\.com\/in\/[\w-]{5,30}[a-zA-Z\d]$/;

function validateLinkedinUrl(url) {
  if (linkedinRegex.test(url)) {
    console.log(`${url} is a valid LinkedIn profile URL.`);
  } else {
    console.log(`${url} is not a valid LinkedIn profile URL.`);
  }
}

validateLinkedinUrl("https://www.linkedin.com/in/john-doe123"); // Valid
validateLinkedinUrl("https://www.linkedin.com/in/jane_doe"); // Valid
validateLinkedinUrl("https://www.linkedin.com/in/john-doe_456"); // Valid
validateLinkedinUrl("https://www.linkedin.com/in/john_doe-789"); // Valid
validateLinkedinUrl("https://www.linkedin.com/in/john_doe"); // Valid
validateLinkedinUrl("https://www.linkedin.com/in/johndoe123/"); // Invalid
validateLinkedinUrl("https://www.linkedin.com/in/john@doe"); // Invalid
validateLinkedinUrl("https://www.linkedin.com/in/john.doe"); // Invalid
validateLinkedinUrl("https://www.linkedin.com/in/john/doe"); // Invalid
validateLinkedinUrl("https://www.linkedin.com/in/123"); // Invalid
validateLinkedinUrl("https://www.linkedin.com/in/john-doe-1234567890123456"); // Invalid
