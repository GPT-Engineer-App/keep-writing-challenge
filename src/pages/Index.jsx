import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  const [text, setText] = useState("");
  const [timer, setTimer] = useState(5);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (timer === 0) {
      setText("");
      setTimer(5);
    }
  }, [timer]);

  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, [text]);

  const handleChange = (e) => {
    setText(e.target.value);
    setTimer(5);
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle className="text-center">Keep Writing</CardTitle>
        </CardHeader>
        <CardContent>
          <textarea
            className="w-full h-64 p-2 border rounded"
            value={text}
            onChange={handleChange}
            placeholder="Start writing your story..."
          />
          <div className="flex justify-between items-center mt-4">
            <span>Time left: {timer}s</span>
            <Button variant="outline" onClick={() => setText("")}>
              Reset
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;