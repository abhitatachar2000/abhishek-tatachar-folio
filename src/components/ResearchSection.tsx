import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpenCheck, ExternalLink } from "lucide-react";

const ResearchSection = () => {
const publications = [
    {
        title: "Comparative Assessment of Regression Models Based On Model Evaluation Metrics",
        authors: "Abhishek V Tatachar",
        journal: "International Research Journal of Engineering and Technology (IRJET) 8(09)",
        citations: 200,
        year: 2021,
        link: "https://www.irjet.net/archives/V8/i9/IRJET-V8I9123.pdf",
    },
    {
        title: "Zigbee, It’s Applications and Comparison with Other Short Range Network Technologies",
        authors: "Amith R, Abhishek V Tatachar, Dr. Kiran Y C, Shivanee Kondur, Varun Y C, Vishwas K V",
        journal: "International Journal of Engineering Research & Technology 10(06), 891–897",
        citations: 10,
        year: 2021,
        link: "https://www.ijert.org/research/zigbee-its-applications-and-comparison-with-other-short-range-network-technologies-IJERTV10IS060412.pdf",
    },
    {
        title: "Recommendations for the Best Communication Technologies for Automated Systems in Urban and Rural Environments",
        authors: "Amith R, Abhishek V Tatachar, Dr. Kiran Y C, Shivanee Kondur, Varun Y C, Vishwas K V",
        journal: "International Research Journal of Engineering and Technology (IRJET) 8(05)",
        citations: null,
        year: 2021,
        link: "https://www.irjet.net/archives/V8/i9/IRJET-V8I9160.pdf",
    },
    {
        title: "Ideal Communication Facilities for Smart Irrigation Systems in Short Range and Long Range Scenarios",
        authors: "Vishwas K V, Abhishek V Tatachar, Amith R, Varun Y C, Kiran Y C",
        journal: "Journal of Signal Processing 7(2), 28–40",
        citations: null,
        year: 2021,
        link: "https://matjournals.co.in/index.php/JOSP/article/view/3568", // Replace with actual link if available
    },
    {
        title: "Object Oriented Programming Concepts Using Python",
        authors: "Abhishek V Tatachar, Vishwas K V, Shivanee Kondur",
        journal: "International Research Journal of Engineering and Technology 8(3)",
        citations: null,
        year: 2021,
        link: "https://www.irjet.net/archives/V8/i3/IRJET-V8I3315.pdf",
    },
    {
        title: "An Automated Attendance System Based on the Concept of Histogram of Oriented Gradients",
        authors: "Abhishek V. Tatachar, Vishwas K V, Dheeraj D.",
        journal: "Journal of Image Processing and Artificial Intelligence 6(3), 13–21",
        citations: null,
        year: 2020,
        link: "https://matjournals.co.in/index.php/JOIPAI/article/view/2432",
    },
    {
        title: "A Secured Surveillance System Employing Dense Optical Flow Estimation",
        authors: "Abhishek V. Tatachar, Dheeraj D., Shivanee Kondur, Sumukh B.K., Vishwas K.V.",
        journal: "International Journal of Engineering Research & Technology (IJERT), 11(7)",
        citations: null,
        year: 2022,
        link: "https://www.ijert.org/research/a-secured-surveillance-system-employing-dense-optical-flow-estimation-IJERTV11IS070050.pdf",
    },
    {
        title: "The Background Study for an Optical Flow Analysis Based Real-Time Intelligent Video Surveillance System for People Safety",
        authors: "Abhishek V. Tatachar, Dheeraj D., Shivanee Kondur, Sumukh B.K., Vishwas K.V.",
        journal: "International Journal of Innovative Research in Technology, Feb 2022",
        citations: null,
        year: 2022,
        link: "https://ijirt.org/publishedpaper/IJIRT154064_PAPER.pdf",
    },
];

  return (
    <section id="research" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Research
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Advancing knowledge through impactful publications and collaborative research.
            </p>
          </div>

          {/* Research Publications */}
          <Card className="shadow-medium border-0 bg-card/50 backdrop-blur-sm animate-slide-up delay-200 w-full">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                  <BookOpenCheck className="w-5 h-5 text-accent" />
                </div>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Research Publications
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                Selected peer-reviewed articles and conference papers.
              </p>
              <div className="space-y-4">
                {publications.map((pub, index) => (
                  <div
                    key={index}
                    className="p-5 bg-muted/20 rounded-lg hover:bg-muted/30 transition-all duration-200"
                  >
                    <h4 className="font-semibold text-lg text-foreground mb-1">
                      {pub.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-1">
                      {pub.authors}
                    </p>
                    <p className="text-sm italic text-muted-foreground mb-3">
                      {pub.journal}
                    </p>

                    {/* Source link + badges */}
                    <div className="flex flex-wrap items-center gap-3">
                      <Badge variant="secondary">{pub.year}</Badge>
                      {pub.citations && (
                        <Badge variant="outline">Cited by {pub.citations}</Badge>
                      )}
                      {pub.link && pub.link !== "#" && (
                        <a
                          href={pub.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm text-accent hover:underline"
                        >
                          <ExternalLink className="w-4 h-4 mr-1" />
                          View Source
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
